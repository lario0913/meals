import React from "react";
import styled from 'styled-components/native'
import { Text, StyleSheet } from "react-native";
import { Card } from 'react-native-paper'


const RestaurantCard = styled(Card)`
    background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
    padding: 20px;
     background-color: white;
`;

const Title = styled(Text)`
    padding-left: 20px; 
    padding-bottom: 16px;
`;

export const RestuarantInfoCard = ({restuarant = {}}) => {
    const {
        name="restuarant info",
        icon="",
        photos=[
            "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
        ],
        address="",
        isOpenNow=true,
        rating=4,
        isClosedTemporarily,
    } = restuarant
    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover 
                key={name} 
                source={{uri: photos[0]}} />
            <Title>{name}</Title>
        </RestaurantCard>
    );
};
