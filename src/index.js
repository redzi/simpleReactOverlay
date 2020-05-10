import React, {useEffect, useState, useRef} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
import * as serviceWorker from './serviceWorker';

const Feature = props => {
    return (
        <div className='feature'>
            <span>{props.value}</span>
        </div>
    )
}

Feature.propTypes = {
    value: PropTypes.string.isRequired
}

const Add = props => {

    return (
        <div className='add' onClick={props.handler}>
            <span>{props.value}</span>
        </div>
    )
}

const Header = props => {

    return (
        <div className='header'>
            <span>{props.value}</span>
        </div>
    )
}

const OverlayForm = props => {
    const focusOn = input => {
        input && input.focus()
    }

    return (
        <div className='form'>
            <form onSubmit={props.formHandler}>
                <input name='name' ref={focusOn} />
                <button>Add</button>
            </form>
        </div>
    )
}

const Features = props => {
    const [features, setFeatures] = useState(['Subwoofer', 'Wings', 'Beveled Bezel', 'Seedless'])
    const [showOverlay, setShowOverlay] = useState(false)

    const handleForm = event => {
        event.preventDefault()
        const newFeatureName = event.target.name.value
        setFeatures(prevState => {
            return prevState.concat([newFeatureName])
        })
        setShowOverlay(false)
    }

    const handler = event => {
        setShowOverlay(true)
    }

    const featureList = features.map(f => <Feature key={f} value={f}/>)

    return (
        <div className='container'>
            {showOverlay ? <OverlayForm formHandler={handleForm}/> : null}
            <Header value={'Phone Features'}/>
            {featureList}
            <Add value={'Add a card'} handler={handler}/>
        </div>
    )
}

ReactDOM.render(<Features/>, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
