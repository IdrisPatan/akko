import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {BasicModal} from './BasicModal'
import think from './tinking.png'
import me from './me.jpg'
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Visibility,
} from 'semantic-ui-react'
import {Modal} from "semantic-ui-react/dist/commonjs/modules/Modal/Modal";


const HomepageHeading = ({ mobile }) => (
    <Container text>
        <Header
            as='h1'
            content='Welcome QandolAkko'
            inverted
            style={{
                fontSize: mobile ? '2em' : '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: mobile ? '1.5em' : '3em',
            }}
        />
        <Header
            as='h2'
            content='Let me tell you a story first! Tell Me what do you think ?'
            inverted
            style={{
                fontSize: mobile ? '1.5em' : '1.7em',
                fontWeight: 'normal',
                marginTop: mobile ? '0.5em' : '1.5em',
            }}
        />
        <p primary size='huge'>
           Lets Get Started
            <Icon name='right arrow' />
        </p>
    </Container>
)

HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
}


class HomepageLayout extends Component {
    state = { openModal: false }

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    toggleModal = () => {
        console.log("I am Handling Modal Render")
        this.setState(state => ({ openModal: !state.openModal }));
    }
    render() {
        const { fixed } = this.state
        return (
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                >
                    <Segment
                        inverted
                        textAlign='center'
                        style={{ minHeight: 500, padding: '1em 0em', background: 'linear-gradient(to bottom, #07101d, #004366, #007e91, #00b982, #0df02c)'}}
                        vertical
                    >
                        <Menu
                            fixed={fixed ? 'top' : null}
                            inverted={!fixed}
                            pointing={!fixed}
                            secondary={!fixed}
                            size='large'
                        >
                            <Container>
                                <Menu.Item as='a' active>
                                    Our Story!
                                </Menu.Item>
                                <Menu.Item as='a'>Past</Menu.Item>
                                <Menu.Item as='a'>Present</Menu.Item>
                                <Menu.Item as='a'>Future</Menu.Item>
                            </Container>
                        </Menu>
                        <HomepageHeading />
                    </Segment>
                </Visibility>

                <div>
                    <Segment style={{ padding: '8em 0em' }} vertical>
                        <Grid container stackable verticalAlign='middle'>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <Header as='h3' style={{ fontSize: '2em' }}>
                                        My life before I Met You!
                                    </Header>
                                    <p style={{fontSize: '1.33em'}}>
                                        A little over two months ago, I had just returned from a trip to London it was a low point in my
                                        life.
                                        I was about to put myself into something I had no clue about but something stopped me from doing
                                        that.
                                        At that point in life I didn't care much who I going to marry or be with, I had almost given up
                                        on finding my ideal girl.
                                        but I never thought it was impossible.... I knew I just have to look harder.
                                    </p>
                                    <Header as='h3' style={{ fontSize: '2em' }}>
                                        Oh Girl Where Are You ?
                                    </Header>
                                    <p style={{fontSize: '1.33em'}}>
                                        Yes that's right, you thought it was difficult the stuff(right partner) of dreams, but mine was
                                        even more challenging.
                                        <b> A modest Afghan Hijabi girl</b> who knows her deen, her priorities in life, and respectable.
                                        A girl who wants to get to Janaat with me, who will remind me of Allah sbt,
                                        so that we can help each other in our deen and duniya basically I was looking for my other Half.
                                        At the same time,
                                        I wished for her to be my best friend, someone romantic and loving, someone who will give me all
                                        the love that I was holding inside.
                                    </p>
                                </Grid.Column>
                                <Grid.Column floated='right' width={6}>
                                    <Image bordered rounded size='large' src={me} />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                    <Segment style={{ padding: '0em' }} vertical>
                        <Grid.Row>
                            <Grid.Column textAlign='center'>
                                <Header as='h3' style={{fontSize: '2em', textAlign: 'center'}}>
                                    "The Two Routes"
                                </Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Segment>
                    <Segment style={{ padding: '0em' }} vertical>
                        <Grid celled='internally' columns='equal' stackable>
                            <Grid.Row textAlign='center'>
                                <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                    <Header as='h3' style={{ fontSize: '2em' }}>
                                        "Afghan Only ?"
                                    </Header>
                                    <p style={{fontSize: '1.33em'}}>
                                        That is was my second most important criteria
                                    </p>
                                </Grid.Column>
                                <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                    <Header as='h3' style={{fontSize: '2em'}}>
                                        "OR Muslim Only ? "
                                    </Header>
                                    <p style={{fontSize: '1.33em'}}>
                                        <Image avatar src={think} />
                                        <b>Nan</b> I decided to go with Muslim Only and choose this route!
                                    </p>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>

                    <Segment style={{ padding: '8em 0em' }} vertical>
                        <Container text>
                            <Header as='h3' style={{fontSize: '2em'}}>
                                When I Made The Deen My Only Choice
                            </Header>
                            <p style={{fontSize: '1.33em'}}>
                                I knew that those qualities were rare but it was more challenging to find them in an Afghan Girl...
                                So I decided to just go with the deen quality only. Allah sbt blessed me with what I wanted as well.
                                Allah Sbt answered my prayers just as I was about to give up...
                                On September 4th at 9:45am I sent a message to a girl with the Green Image with the name of A NA 26,
                                from Canada
                                at that point I never thought that message will change my life forever....
                            </p>
                            <Header as='h3' style={{fontSize: '2em'}}>
                                "Dil Ba Dil Ra Darad - 5G Connection"
                            </Header>
                            <p style={{fontSize: '1.33em'}}>
                                Allhamdu Lellah the third thing I said was “My name is Mohamad Idris what is your name ?“
                                That’s how I got introduced to a very sweet girl Akko Jan...
                                Allhamdeu Lellah Now I have a smile on my face because of you. Thanks to you Akko Jan !

                            </p>
                            <Divider
                                as='h4'
                                className='header'
                                horizontal
                                style={{margin: '3em 0em', textTransform: 'uppercase'}}
                            >
                                <a href='#'>Voice of Heart</a>
                            </Divider>
                            <Header as='h3' style={{fontSize: '2em'}}>
                                Did I Tell You How I Feel About You?
                            </Header>
                            <p style={{fontSize: '1.33em'}}>
                                Yes I know you probably disregarded the earlier boasts as to how much I Like, but
                                it's really true. It didn't take long before I felt so deeply for you!
                                I agree with you that the love begins after marriage when we scarifies for one another
                                and your likes will become my likes and mine will become yours. But that's the higher level of Love
                                which can only be achieved by living together. However I really felt the depth of my feelings for you when
                                You were leaving to Toronto after visiting us. I felt like I lost something very precious, as if a chunk
                                has been removed from my chest. Not to mention how happy I get when I see you..
                                How I can not stop thinking of you, I don't have enough words to explain my feeling for you Akko Jan. As you
                                know very well that I am ByeByeLingual! I can talk for hours about how much i like you and I think
                                I have bugged you enough about everything.  I will just conclude with one thing.
                                <p>
                                    <b> I can not find anyone like you ! </b>
                                </p>
                            </p>
                            <BasicModal/>
                        </Container>
                    </Segment>

                    <Segment inverted vertical style={{ padding: '5em 0em', backgroundColor: '#330000' }}>
                        <Container>
                            <Grid divided inverted stackable>
                                <Grid.Row>
                                    <Grid.Column width={3}>
                                        <Header inverted as='h4' content='About Her' />
                                        <List link inverted>
                                            <List.Item as='a'>QandolAkko</List.Item>
                                            <List.Item as='a'>ShereenAkko</List.Item>
                                            <List.Item as='a'>JigarAkko</List.Item>
                                            <List.Item as='a'>BebegAkko</List.Item>
                                        </List>
                                    </Grid.Column>
                                    <Grid.Column width={3}>
                                        <Header inverted as='h4' content='More About Her' />
                                        <List link inverted>
                                            <List.Item as='a'>Gorgeous</List.Item>
                                            <List.Item as='a'>Sweetheart</List.Item>
                                            <List.Item as='a'>Patasa</List.Item>
                                            <List.Item as='a'>Strong</List.Item>
                                        </List>
                                    </Grid.Column>
                                    <Grid.Column width={7}>
                                        <Header as='h4' inverted>
                                            Even More About Her
                                        </Header>
                                        <p>
                                            4096 Bit RSA Encrypted, She Won't Budge!
                                        </p>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Container>
                    </Segment>
                </div>
            </Responsive>
        )
    }
}

export default HomepageLayout