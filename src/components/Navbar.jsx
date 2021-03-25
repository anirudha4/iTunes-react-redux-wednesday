// import { useStoreActions, useStoreState } from 'easy-peasy'
import React, { useState } from 'react'
import logo from '../logo.svg'
import { connect } from 'react-redux'
import {fetchData} from '../actions/fetchResults'

function Navbar({fetchData, result}) {
    const [term, setTerm] = useState('');
    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            if(term.length == 0)
                return
            fetchData(term)
        }
    }
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt=""/>
            </div>
            <div className="right">
                <div className="search">
                    <input type="search" value={term} placeholder="Search" onKeyDown={handleEnter} onChange={e => setTerm(e.target.value) }  />
                    <span className="fas fa-search"></span>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = state =>({
    result: state.result
  })
  
  export default connect(mapStateToProps, { fetchData })(Navbar)
  