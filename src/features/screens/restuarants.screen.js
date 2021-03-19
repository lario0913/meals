import React from "react";
import styled from 'styled-components/native'
import { SafeAreaView, StyleSheet, View, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestuarantInfoCard } from "../components/restaurants.info.card";

const SafeArea = styled.SafeAreaView`
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  flex: 1;
`;

const SearchContainer = styled.View`
  padding: 16px;
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: 16px;
`;


export const RestuarantScreen = () => {
    return (
        <SafeArea>
            <SearchContainer>
                <Searchbar />
            </SearchContainer>
            <RestaurantListContainer>
                <RestuarantInfoCard />
            </RestaurantListContainer>
      </SafeArea>
    );
};

