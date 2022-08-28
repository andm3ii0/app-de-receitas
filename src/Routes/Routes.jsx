import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Foods from '../pages/Foods';
import FoodDetail from '../pages/FoodDetail';
import RecipeInProgress from '../pages/RecipeInProgress';
import Drinks from '../pages/Drinks';
import DrinkDetail from '../pages/DrinkDetail';
import Profile from '../pages/Profile';
import DoneRecipes from '../pages/DoneRecipes';
import FavoriteRecipes from '../pages/FavoriteRecipes';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/app-de-receitas/" component={ Login } />
      <Route exact path="/app-de-receitas/foods" component={ Foods } />
      <Route exact path="/app-de-receitas/drinks" component={ Drinks } />
      <Route exact path="/app-de-receitas/foods/:id" component={ FoodDetail } />
      <Route exact path="/app-de-receitas/drinks/:id" component={ DrinkDetail } />
      <Route
        exact
        path="/app-de-receitas/foods/:id/in-progress"
        component={ RecipeInProgress }
      />
      <Route
        exact
        path="/app-de-receitas/drinks/:id/in-progress"
        render={ () => <RecipeInProgress drink /> }
      />
      <Route exact path="/app-de-receitas/profile" component={ Profile } />
      <Route exact path="/app-de-receitas/done-recipes" component={ DoneRecipes } />
      <Route exact path="/app-de-receitas/favorite-recipes" component={ FavoriteRecipes } />
    </Switch>
  );
}
