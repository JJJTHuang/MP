
var firstPages = []
const lastPage = []


for (let i = 0; i < 4; i++) {
  firstPages.push({
    id: i,
    title: `标题${i}`,
    description: `内容${i}`,
    cover: 'https://www.baidu.com/img/bd_logo1.png?where=super'
  })
}

for (let i = 0; i < 2; i++) {
  lastPage.push({
    id: i,
    title: `标题${i} 2`,
    description: `内容${i} 2`,
    cover: 'https://www.baidu.com/img/bd_logo1.png?where=super'
  })
}

var isEnd = false
var READED_ARTICLES = 'READED_ARTICLES'

// pages/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    articles: {},
    loading: false,
    loadMoreText: '加载更多'
  },
  loadMore() {
    this.loadData()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadData(true)
  },
  loadData (isFirstPage) {
    console.log(isFirstPage)
    if (!isEnd && !this.data.loading) {
      this.setData({ loading: true })
      setTimeout(() =>{

        console.log('aaaa')
        if (isFirstPage) {
          this.setData({
            articles: this.addReadStatus(firstPages),
            loading: false
          })
        } else {
          this.setData({
            articles: firstPages.concat(this.addReadStatus(lastPage)),
            loading: false
          })
          this.setData({
            loadMoreText: '已无更多'
          })
        }
        // isEnd = true
      }, 1000)
    }
  },
  toDetailPage (e) {
    const id = e.currentTarget.dataset.id;
    let readedArticles = wx.getStorageSync(READED_ARTICLES);
    if (!readedArticles) {
      wx.setStorageSync(READED_ARTICLES, [id]);
    } else {
      readedArticles.push(id);
      wx.setStorageSync(READED_ARTICLES, readedArticles);
    }
    wx.navigateTo({
      url: `text?id=${id}`,
    })
  },
  addReadStatus: function (articles) {
    let readedArticle = wx.getStorageSync(READED_ARTICLES);
    if (!readedArticle) {
      return readedArticle;
    }

    let newArticle = [];
    for (let i = 0; i < articles.length; i++) {
      let article = Object.assign({}, articles[i]);
      if (readedArticle.indexOf(article.id) != -1) {
        article.isReaded = true;
      } else {
        article.isReaded = false;
      }
      newArticle.push(article);
    }
    return newArticle
  }
})