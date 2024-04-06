module.exports = {
    ci: {
      collect:{
        url:["https://www.businessinsider.com/"]
      },
      assert:{
        'categories:accessibility': ['error', {'minScore': 85}]
      },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };