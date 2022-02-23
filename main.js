fetch
  (
  " https://gnews.io/api/v4/top-headlines?token=e183811a67455d20614366a658c9e63f"
  )
  .then((response) => {

    return response.json();
  })
  .then((data) => {
    buildNewsItem(data);
  });
// lấy data xuất lên màn hình


$("#searchbtn").click(function (e) 
{
  e.preventDefault();
    //ẩn modal
  $(".modal").modal('hide');
  
  let query = $("#searchquery").val();
  
  fetch 
  (
    'https://gnews.io/api/v4/search?q=' +
      query +
      '&token=e183811a67455d20614366a658c9e63f'
  )
  .then(function (response) 
  {
    return response.json();
  })
  .then(function (data) 
  {
    buildNewsItem(data);
  });
});

function buildNewsItem(data) 
{
        let output = "";
        let latestNews = data.articles;
        for (var i in latestNews) 
        { // nó sẽ bằng ? (var i = 0; i < newsdata.articles.length; i++)
          output += `
          <div class="container">
          <div class="card m-3 shadow">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${latestNews[i].image}" class="img-fluid rounded-start" alt="">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title"><a href="${latestNews[i].url}" title="${latestNews[i].title}">${latestNews[i].title}</a></h5>
                  <p class="card-text"><small class="text-muted"><b>Published</b>: ${latestNews[i].publishedAt} </small></p>
                  <p>${latestNews[i].description}</p>
              <a href="${latestNews[i].url}" target="_blank" class="btn btn-success">Read More</a>
              <p></p>
                </div>
              </div>
            </div>
          </div>
        </div> 
          `;
        }
        if (output !== "")
        {
          $("#news-list").html(output);
        }
}
// xây dựng ui từ data tải về
