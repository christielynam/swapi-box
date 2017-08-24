import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import fetchMock from 'fetch-mock';
import App from './App';
import AppMock from './AppMock'

console.log(AppMock)

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    // Fetch Main Star Wars Data
    // fetchMock.get('https://swapi.co/api/films/', {status: 200, body: AppMock[0]})
    // fetchMock.get('https://swapi.co/api/people/', {status: 200, body: AppMock[1]});
    // fetchMock.get('https://swapi.co/api/planets/', {status: 200, body: AppMock[2]});
    // fetchMock.get('https://swapi.co/api/vehicles/', {status: 200, body: AppMock[3]});

    fetchMock.get(['https://swapi.co/api/films/', 'https://swapi.co/api/people/', 'https://swapi.co/api/planets/', 'https://swapi.co/api/vehicles/'], {status: 200, body: AppMock})

    // fetchMock.flush()
    // .then(() => {
    //
    //   fetchMock.get("https://swapi.co/api/planets/1/",
    //   {status: 200, body: AppMock[1].results});
    //   fetchMock.get("https://swapi.co/api/planets/1/",
    //   {status: 200, body: AppMock[1].results});
    //   fetchMock.get("https://swapi.co/api/planets/8/",
    //   {status: 200, body: AppMock[1].results});
    //   fetchMock.get("https://swapi.co/api/planets/1/",
    //   {status: 200, body: AppMock[1].results});
    //   fetchMock.get("https://swapi.co/api/planets/2/",
    //   {status: 200, body: AppMock[1].results});
    //   fetchMock.get("https://swapi.co/api/planets/1/",
    //   {status: 200, body: AppMock[1].results});
    //   fetchMock.get("https://swapi.co/api/planets/1/",
    //    {status: 200, body: AppMock[1].results});
    //   fetchMock.get("https://swapi.co/api/planets/1/",
    //   {status: 200, body: AppMock[1].results});
    //   fetchMock.get("https://swapi.co/api/planets/1/",
    //    {status: 200, body: AppMock[1].results});
    //   fetchMock.get("https://swapi.co/api/planets/20/",
    //   {status: 200, body: AppMock[1].results});
    // }).then(() => {
    //   fetchMock.get("https://swapi.co/api/species/1/",
    //   {status: 200, body: AppMock[1].results});
    //   fetchMock.get("https://swapi.co/api/species/2/",
    //   {status: 200, body: AppMock[1].results});
    //   fetchMock.get("https://swapi.co/api/species/2/",
    //   {status: 200, body: AppMock[1].results});
    //   fetchMock.get("https://swapi.co/api/species/1/",
    //   {status: 200, body: AppMock[1].results});
    //   fetchMock.get("https://swapi.co/api/species/1/",
    //   {status: 200, body: AppMock[1].results});
    //   fetchMock.get("https://swapi.co/api/species/1/",
    //   {status: 200, body: AppMock[1].results});
    //   fetchMock.get("https://swapi.co/api/species/1/",
    //   {status: 200, body: AppMock[1].results});
    //   fetchMock.get("https://swapi.co/api/species/2/",
    //   {status: 200, body: AppMock[1].results});
    //   fetchMock.get("https://swapi.co/api/species/1/",
    //   {status: 200, body: AppMock[1].results});
    //   fetchMock.get("https://swapi.co/api/species/1/",
    //   {status: 200, body: AppMock[1].results});
    // })
    // Fetch Homeworld Data
    // fetchMock.get("https://swapi.co/api/planets/1/",
    // {status: 200, body: AppMock[1].results[0].homeworld});
    // fetchMock.get("https://swapi.co/api/planets/1/",
    // {status: 200, body: AppMock[1].results[1].homeworld});
    // fetchMock.get("https://swapi.co/api/planets/8/",
    // {status: 200, body: AppMock[1].results[2].homeworld});
    // fetchMock.get("https://swapi.co/api/planets/1/",
    // {status: 200, body: AppMock[1].results[3].homeworld});
    // fetchMock.get("https://swapi.co/api/planets/2/",
    // {status: 200, body: AppMock[1].results[4].homeworld});
    // fetchMock.get("https://swapi.co/api/planets/1/",
    // {status: 200, body: AppMock[1].results[5].homeworld});
    // fetchMock.get("https://swapi.co/api/planets/1/",
    //  {status: 200, body: AppMock[1].results[6].homeworld});
    // fetchMock.get("https://swapi.co/api/planets/1/",
    // {status: 200, body: AppMock[1].results[7].homeworld});
    // fetchMock.get("https://swapi.co/api/planets/1/",
    //  {status: 200, body: AppMock[1].results[8].homeworld});
    // fetchMock.get("https://swapi.co/api/planets/20/",
    // {status: 200, body: AppMock[1].results[9].homeworld});
    //
    //
    // // Fetch Species Data
    // fetchMock.get("https://swapi.co/api/species/1/",
    // {status: 200, body: AppMock[1].results[0].species});
    // fetchMock.get("https://swapi.co/api/species/2/",
    // {status: 200, body: AppMock[1].results[1].species});
    // fetchMock.get("https://swapi.co/api/species/2/",
    // {status: 200, body: AppMock[1].results[2].species});
    // fetchMock.get("https://swapi.co/api/species/1/",
    // {status: 200, body: AppMock[1].results[3].species});
    // fetchMock.get("https://swapi.co/api/species/1/",
    // {status: 200, body: AppMock[1].results[4].species});
    // fetchMock.get("https://swapi.co/api/species/1/",
    // {status: 200, body: AppMock[1].results[5].species});
    // fetchMock.get("https://swapi.co/api/species/1/",
    // {status: 200, body: AppMock[1].results[6].species});
    // fetchMock.get("https://swapi.co/api/species/2/",
    // {status: 200, body: AppMock[1].results[7].species});
    // fetchMock.get("https://swapi.co/api/species/1/",
    // {status: 200, body: AppMock[1].results[8].species});
    // fetchMock.get("https://swapi.co/api/species/1/",
    // {status: 200, body: AppMock[1].results[9].species});
    //
    // // Fetch Residents Data
    // fetchMock.get("https://swapi.co/api/people/5/", {status: 200, body: AppMock});
    // fetchMock.get("https://swapi.co/api/people/68/", {status: 200, body: AppMock});
    // fetchMock.get("https://swapi.co/api/people/81/", {status: 200, body: AppMock});
    // fetchMock.get("https://swapi.co/api/people/26/", {status: 200, body: AppMock});
    // fetchMock.get("https://swapi.co/api/people/30/", {status: 200, body: AppMock});
    // fetchMock.get("https://swapi.co/api/people/3/", {status: 200, body: AppMock});
    // fetchMock.get("https://swapi.co/api/people/21/", {status: 200, body: AppMock});
    // fetchMock.get("https://swapi.co/api/people/36/", {status: 200, body: AppMock});
    // fetchMock.get("https://swapi.co/api/people/37/", {status: 200, body: AppMock});
    // fetchMock.get("https://swapi.co/api/people/38/", {status: 200, body: AppMock});
    // fetchMock.get("https://swapi.co/api/people/39/", {status: 200, body: AppMock});
    // fetchMock.get("https://swapi.co/api/people/42/", {status: 200, body: AppMock});
    // fetchMock.get("https://swapi.co/api/people/60/", {status: 200, body: AppMock});
    // fetchMock.get("https://swapi.co/api/people/61/", {status: 200, body: AppMock});
    // fetchMock.get("https://swapi.co/api/people/66/", {status: 200, body: AppMock});
    // fetchMock.get("https://swapi.co/api/people/35/", {status: 200, body: AppMock});
    // fetchMock.get("https://swapi.co/api/people/34/", {status: 200, body: AppMock});
    // fetchMock.get("https://swapi.co/api/people/55/", {status: 200, body: AppMock});
    // fetchMock.get("https://swapi.co/api/people/74/", {status: 200, body: AppMock});
    // fetchMock.get("https://swapi.co/api/people/22/", {status: 200, body: AppMock});
    // fetchMock.get("https://swapi.co/api/people/72/", {status: 200, body: AppMock});
    // fetchMock.get("https://swapi.co/api/people/73/", {status: 200, body: AppMock});
    // fetchMock.get("https://swapi.co/api/people/63/", {status: 200, body: AppMock});
    //





  })

  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  });

  // it('renders without crashing', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<App />, div);
  // });

  it('displays our wrapper', async () => {

    await
    // fetchMock.flush()
    // .then(() => {
    //   // wrapper = mount(<App />)
    // })

    const wrapper = mount(<App />)
    await wrapper.update()

    expect(fetchMock.called()).toEqual(true)

    describe('asyncFetch', () => {

  it('can fetch', async () => {

    const response = await App.componentDidMount('http://fake.com');

    expect(result).toEqual("something");

  });
});




  })

  it.skip('should exist', () => {
    expect(wrapper).toBeDefined()
  })


})
