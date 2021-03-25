import React, { useState } from 'react';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Result from './components/Result';
import Loading from './components/Loading';
import { connect } from 'react-redux'
import {fetchData} from './actions/fetchResults'
import 'antd/dist/antd.css'; 


function App({ fetchData, result }) {
  const [isLoading, setIsLoading] = useState(true)
  setTimeout(() => {
    setIsLoading(false)
  }, 2000)
  useEffect(() => {
      const payload = "Don't rush"
      fetchData(payload)
  }, [])
  return (
    <div className="App">
      <div className="container">
        <Navbar/>
        {isLoading && <Loading/>}
        {!result.loading && !isLoading && <Result/>}
        
      </div>
    </div>
  );
}

const mapStateToProps = state =>({
  result: state.result
})

export default connect(mapStateToProps, { fetchData })(App)
