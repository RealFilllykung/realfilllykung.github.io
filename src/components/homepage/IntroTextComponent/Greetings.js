import { useSpring, animated } from 'react-spring'
function Greetings(){
    const styles = useSpring({
        loop: false,
        from: {x:0, y:-1000},
        to: {x:0,y:0}
    })

    return(
        <animated.p class="text-light" style={{...styles}}>
            Greetings everyone! I'm...
        </animated.p>
    )
}

export default Greetings