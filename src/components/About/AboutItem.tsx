import { Grid } from '@mui/material'
import './AboutItem.css'
import Logo from 'components/Logo/Logo'

type Props = {}
const AboutItem = (props: Props) => {
    return (
        <>
            <Grid>
                <div className="bgimg-1">
                    <div className="caption">
                        <div className="border-about">
                            <Logo />
                        </div>
                    </div>
                </div>

                <div className="title-about first">
                    <h3>Lorem ipsum</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Atque voluptatem aliquid reprehenderit. Repellendus
                        consequuntur vel aut, ipsam quae odit quasi possimus
                        laudantium sapiente pariatur similique dignissimos illo,
                        omnis ipsum fugit. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Atque voluptatem aliquid
                        reprehenderit. Repellendus consequuntur vel aut, ipsam
                        quae odit quasi possimus laudantium sapiente pariatur
                        similique dignissimos illo, omnis ipsum fugit. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Atque
                        voluptatem aliquid reprehenderit. Repellendus
                        consequuntur vel aut, ipsam quae odit quasi possimus
                        laudantium sapiente pariatur similique dignissimos illo,
                        omnis ipsum fugit.
                    </p>
                </div>

                <div className="bgimg-2">
                    <div className="caption">
                        <span className="border-about">Lorem ipsum</span>
                    </div>
                </div>

                <div className="position">
                    <div className="title-about background">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Atque voluptatem aliquid reprehenderit.
                        </p>
                    </div>
                </div>

                <div className="bgimg-3">
                    <div className="caption">
                        <span className="border-about">Lorem ipsum</span>
                    </div>
                </div>

                <div className="position">
                    <div className="title-about background">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Atque voluptatem aliquid reprehenderit.
                        </p>
                    </div>
                </div>

                <div className="bgimg-1">
                    <div className="caption">
                        <span className="border-about">Lorem ipsum</span>
                    </div>
                </div>
            </Grid>
        </>
    )
}
export default AboutItem
