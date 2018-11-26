import React from 'react'
import rose from './rose.jpg'
import {Button, Container, Header, Image, Modal} from 'semantic-ui-react'

export const BasicModal = () => (
        <Modal size={'fullscreen'}
            trigger={<Button>My Request For This Sunday! November 25th</Button>} centered={false}>
            <Modal.Header>I Love You AKKO Jaani! <h1> Will You Marry Me ?</h1></Modal.Header>
            <Modal.Content image>
              <Image wrapped size='large' src={rose} />
              <Modal.Description>
                <Header>Will Your Marry Me ? </Header>
                  <li>I am not perfect, I have my shortcomings</li>
                  <li>I can not make the distance between Dallas and Toronto any shorter</li>
                  <li>But I will try my best to make this journey enjoyable!</li>
                  <li>And Love You Only You With All My Heart</li>
                  <li>Insha Allah! If You Accept Me, I will feel like I am the luckiest Afghan guy</li>
                  <li>Insha Allah! If You Accept Me, I will feel like I am the luckiest Afghan guy</li>
                <p>"Mohamad Idris Patan"</p>
              </Modal.Description>
            </Modal.Content>
          </Modal>
)