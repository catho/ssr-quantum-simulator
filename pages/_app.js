import App from 'next/app';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { GlobalStyle } from '@catho/quantum';
import Image from 'next/image'
import logoImage from '../static/imgs/cathoLogo.png'
import backgroundImg from '../static/imgs/background-image.png'



export default class HomePage extends App {

  componentDidMount() {

    const  hiddenMenu = document.getElementById("hiddenMenu");

    document
      .getElementById("menuButton")
      .addEventListener("click", showMenu);
    
    
    function showMenu (){
    
      const { classList } = hiddenMenu;
    
      if (classList.contains('HideMenu')) {
    
        classList.add("ShowMenu");
        classList.remove("HideMenu");
    
      } else {
        classList.remove("ShowMenu");
        classList.add("HideMenu");
    
      }
    }
    
  };

  render() {



    const { Component, pageProps } = this.props;

    return (
      <>

      <header>
      <div class="HeaderContainer">
        <div class="CathoLogo">
          <a href="/"
            ><Image src={logoImage} alt="Logotipo Catho" />
              </a>
        </div>
        <nav class="VisibleMenu">
          <ul class="NavList">
            <li class="navItem"><a href="/cathocomponents">Catho Components</a></li>
            <li class="navItem"><a href="/quantum">Quantum</a></li>
            <li class="navItem"><button class="SandwichButton" id="menuButton">&#x2630;</button></li>
          </ul>
        </nav>
      </div>
      <nav id="hiddenMenu" class="HiddenMenu HideMenu">
        <ul>
          <li class="navItem"><a href="#">Contact us</a></li>
          <li class="navItem"><a href="#">Repositories</a></li>
        </ul>
      </nav>
    </header>
    <div  class="MainContent">
        <GlobalStyle />
        <Component {...pageProps} />
        </div>

        <footer class="Footer">
          <p>
            Essa tela foi especialmente desenvolvida para a dev.Ela maravilhosa da
            ACME.
          </p>
          <p>
            <time datetime="2023-02-09">9 de fevereiro de 2023</time>
          </p>
          <p>
            Por designer com mão de android
          </p>
        </footer>

      </>
    );
  }
}
