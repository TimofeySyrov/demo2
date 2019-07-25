import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import style from './App.module.scss';

import Nav from '../Nav';
import Footer from '../Footer';
import header from './header.png';

import { TextQA as TextQAru, ODQA as ODQAru, NER as NERru, Sentiment } from '../skills/ru';
import { TextQA as TextQAen, ODQA, Ranking, NER, Intent, Insult } from '../skills/en';
import { TextQA as TextQAml, NER as NERml } from '../skills/mu';

class App extends Component {

  render () {
    return (
      <BrowserRouter>
        <header className={style.header}>
          <img src={header} alt="DeepPavlov Demo"/>
          <Nav/>
        </header>
        <main className={style.main}>
          <Switch>
            <Route path="/ru/textqa" exact component={TextQAru}/>
            <Route path="/ru/odqa" exact component={ODQAru}/>
            <Route path="/ru/ner" exact component={NERru}/>
            <Route path="/ru/sentiment" exact component={Sentiment}/>
            <Route path="/en/textqa" exact component={TextQAen}/>
            <Route path="/en/odqa" exact component={ODQA}/>
            <Route path="/en/ranking" exact component={Ranking}/>
            <Route path="/en/ner" exact component={NER}/>
            <Route path="/en/intent" exact component={Intent}/>
            <Route path="/en/insult" exact component={Insult}/>
            <Route path="/mu/textqa" exact component={TextQAml}/>
            <Route path="/mu/ner" exact component={NERml}/>
          </Switch>
        </main>
        <Footer/>
      </BrowserRouter>
    );
  }
}

export default App;