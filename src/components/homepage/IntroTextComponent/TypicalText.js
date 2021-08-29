import { useSpring, animated } from 'react-spring'
import Typical from 'react-typical'

function TypicalText(){

    const styles = useSpring({
        loop: false,
        from: {x:-5000, y:0},
        to: {x:0, y:0},
        delay: 750,
        opacity: 1
    })

    return(
        <animated.p class="text-light" style={{...styles}}>
            I'm a
            <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                    ' Youtuber', 2000,
                    ' Undergrad Computer Engineer', 2000
                ]}
            >
            </Typical>
        </animated.p>
    )
}

export default TypicalText