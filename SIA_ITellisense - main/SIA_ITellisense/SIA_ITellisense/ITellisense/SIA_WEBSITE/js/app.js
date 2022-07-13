$(document).ready(function() {

    let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e6bf693aa6e94782aed8de39c25fc361";

    $.ajax({
        url: url,
        method: "GET",
        dataType: "JSON",

        beforeSend: function() {
            $(".progress").show();
        },

        complete: function() {
            $(".progress").hide();
        },

        success: function(newsdata) {
            let output = "";
            let latestNews = newsdata.articles;
            for (var i in latestNews) {
                output += `<article class="relative blog-item-holder-scode">
        <div class="post-thumbnail">
            <a>
            <img src="${latestNews[i].urlToImage}">
            </a>
        </div>
        <h4 class="entry-title">
            <a>
            ${latestNews[i].title}
                </a>
        </h4>
        <div class="excerpt">
        ${latestNews[i].description}
        </div>
           <br>   
        <div class="button-holder text-left">
                <a href="${latestNews[i].url}" class="button-dot">
                    <span style="color:black">MORE</span>
                </a>
            </div>
    </article>
      `;
            }

            if (output !== "") {
                $("#newsResults").html(output);
            }

        },
    })

});