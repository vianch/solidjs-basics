import { Component, createSignal, For, onCleanup, onMount } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  const [breweryList, setBreweryList] = createSignal([]);
  
  const fetchBreweries = () => {
    const apiUrl = "https://api.openbrewerydb.org/breweries/";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setBreweryList(data)
      });
  }
  onMount(() => {
    fetchBreweries();
  })

  return (
    <div class="bg-blue-200 h-full">
    <h1 class="text-3xl text-red-400 text-center py-6">List of Breweries</h1>
      <ul class="container mx-auto pb-10 grid grid-cols-4 gap-10">
        <For each={breweryList()}>{(list: { name: string, country: string, city: string}) =>
          <li class="bg-white p-4">
            <span class="inline-block mb-2 text-lg font-bold">
              {list.name}
            </span>
            <span class="inline-block mb-2">
              Country: {list.country}
            </span>
            <span class="inline-block mb-2">
              City: {list.city}
            </span>
          </li>
        }
        </For>
      </ul>
  </div>
  );
};

export default App;
