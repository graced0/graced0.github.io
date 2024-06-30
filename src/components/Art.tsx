function Art() {
    return (
        <div className="HeroContainer" id="art" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            textAlign: 'center',
            paddingBottom: '15vh',
            position: 'relative',
            background: 'linear-gradient(to bottom, white, #B1DDAD)',
            boxSizing: 'border-box',
            border: '1.5vw solid white',
            borderRadius: '4vw'
        }}>
        <h4 className="Footer d-none d-sm-block" style={{ 
            position: 'absolute', 
            bottom: '5vh', 
            fontSize: '1.25rem',
            fontFamily: 'Space Grotesk',
            color: '#65578A',
            fontWeight: 300, 
        }}><i>Last updated: © 6/2024;</i><br />Built from scratch by Grace Do.
        </h4>
        <h4 className="Footer d-block d-sm-none" style={{ 
            position: 'absolute', 
            bottom: '5vh', 
            fontSize: '1.1rem',
            fontFamily: 'Space Grotesk',
            color: '#65578A',
            fontWeight: 300, 
        }}><i>Last updated: © 6/2024;</i><br />Built from scratch by Grace Do.
        </h4>
        </div>
    )

}
export default Art;