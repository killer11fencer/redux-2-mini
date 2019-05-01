import React, { Component } from 'react';
import Card from './../shared/Card/Card';
import {mediumArticles} from '../../ducks/mediumReducer'
import Loading from './../shared/Loading/Loading';
import {connect} from 'react-redux'

class Medium extends Component {
  componentDidMount() {
    this.props.mediumArticles();
  }
  
  render() {
    const articles = this.props.articles.map((article => <Card key={article.id} article={article} />))
    return (
      <div className='news-container'>
        <img src="./mediumLogo.png" style={styles.logo} alt="" />
        {this.props.loading ? <Loading /> : <div>{articles}</div>}
      </div>
    )
  }
}
function mapStateToProps(state) {
  return state.medium
}

export default connect(mapStateToProps,{mediumArticles})(Medium);

const styles = {
  logo: { width: '250px' }
}