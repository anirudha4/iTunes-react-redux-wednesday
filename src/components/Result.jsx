import React from 'react'
import { connect } from 'react-redux'
import {fetchData} from '../actions/fetchResults'
import Card from './Card'

function Result({fetchData, results}) {
    return (
        <div className="result-container">
            <h2>Popular Search</h2>
            {results.data.length ? (
                <>
                     <div className="results">
                        {results.data.map(result => (
                             <Card key={result.trackId} result={result}></Card>
                    ))}
                </div>
                </>
            ) : (
                <>
                    <div className="error">Nothing matches your search</div>
                </>
            )}
        </div>
    )
}
const mapStateToProps = state =>({
    results: state.result
})
  
export default connect(mapStateToProps, { fetchData })(Result)