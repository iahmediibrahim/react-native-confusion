import React, { Component } from 'react';
import { ScrollView, View, Text, FlatList } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';

function RenderComments({ comments }) {
    const renderCommentItem = ({ item, index }) => {
        return (
            <View key={index} style={{ margin: 10 }}>
                <Text style={{ fontSize: 14 }}>{item.comment}</Text>
                <Text style={{ fontSize: 12 }}>{item.rating} Stars</Text>
                <Text style={{ fontSize: 12 }}>{'-- ' + item.author + ', ' + item.date} </Text>
            </View>
        );
    };

    return (
        <Card title="Comments">
            <FlatList data={comments} renderItem={renderCommentItem} keyExtractor={(item) => item.id.toString()} />
        </Card>
    );
}

const RenderDish = ({ dish, favorite, onPress }) => {
    if (dish != null) {
        return (
            <Card featuredTitle={dish.name} image={require('./images/uthappizza.png')}>
                <Text style={{ margin: 10 }}>{dish.description}</Text>
                <Icon
                    raised
                    reverse
                    name={favorite ? 'heart' : 'heart-o'}
                    type="font-awesome"
                    color="#f50"
                    onPress={() => (favorite ? console.log('Already favorite') : onPress())}
                />
            </Card>
        );
    } else {
        return <View />;
    }
};
class Dishdetail extends Component {
    state = {
        dishes: DISHES,
        comments: COMMENTS,
        favorites: [],
    };
    markFavorite(dishId) {
        this.setState({ favorites: this.state.favorites.concat(dishId) });
    }
    render() {
        const dishId = this.props.route.params.dishId;
        return (
            <ScrollView>
                <RenderDish
                    dish={this.state.dishes[dishId]}
                    favorite={this.state.favorites.some((el) => el === dishId)}
                    onPress={() => this.markFavorite(dishId)}
                />
                <RenderComments comments={this.state.comments.filter((comment) => comment.dishId === dishId)} />
            </ScrollView>
        );
    }
}
export default Dishdetail;
