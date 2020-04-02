import React from 'react'

const Header = () => {
    const styles = {
        background: 'linear-gradient(20deg, #6813cb, #2575fc)',
        textAlign: 'center',
        borderRadius: '0.2em',
        color: '#FFF',
        padding: '0.3em',
        margin: '0.3em',
        fontSize: '14px'
    }
    return (
        <div>
            <header style={styles}>
                <h1>Movie Selector</h1>
                <h2>Search Movie</h2>
            </header>
        </div>
    )
}

export default Header