import React from 'react'
import rose from './rose.jpg'
import rosesHeart from './rosesHeart.png'
import space from './space.png'
import movedHearts from './movedHearts.jpg'
import {Button, Header, Image, Modal} from 'semantic-ui-react'

export const BasicModal = () => (
        <Modal size={'fullscreen'}
            trigger={<Button>My Request For This Sunday! November 25th</Button>} centered={false}>
            <Modal.Header> QandolAKKO! </Modal.Header>
            <Modal.Content image>
              <Image wrapped size='large' src={space} />
              <Modal.Description>
                  <Image wrapped size='large' src={rosesHeart} />
                  <Image wrapped size='large' src={movedHearts} />
                  <Image wrapped size='large' src={rosesHeart} />

                  <Header>My Request ! </Header>

                  <li>I am not perfect, I have my shortcomings</li>
                  <li>I can not make the distance between Dallas and Toronto any shorter</li>
                  <li>But I will try my best to make this journey enjoyable!</li>
                  <li>And Love You Only You With All My Heart</li>
                  <li>Will You Accept Me As Your Garment Of Life and Become The Garment Of My Life</li>
                  <li>Insha Allah! If You Accept Me, I will feel like I am the luckiest Afghan guy</li>

                  <h1> Will You Marry Me ?</h1>
                <p>"Mohamad Idris Patan"</p>
                  <Image wrapped size='large' src={rose} />
              </Modal.Description>
            </Modal.Content>
          </Modal>
)