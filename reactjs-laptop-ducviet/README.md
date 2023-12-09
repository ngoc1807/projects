https://picsum.photos/600/400

     overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              margin-bottom: 2px;

let a = [];
for (let i = 0; i < 5; i++) {
a.push({ id: i });
}

     <div className="boxSummaryBlog__content">
      {a.map((i, k) => (
        <a href="s" className="boxSummaryBlog__content-item" key={k}>
          <div className="box">
            <div className="box__image">
              <img src={news1} alt="" />
            </div>
            <div className="box__title">
              Apple Fitness + bổ sung bài tập cho người đang mang thai và người
              lớn tuổi
            </div>
            <div className="box__summary">
              Được dẫn dắt bởi huấn luyện viên (người sắp làm mẹ) Betina Gozo và
              2 người mẹ trẻ Emily Fayettesssssssssssssssssssssss
            </div>
            <div className="box__option">
              <div className="box__option-time">
                <ICON_CLOCK_16 />
                <span> 12:00, 20/08/2021</span>
              </div>
              <div className="box__option-time">
                <ICON_EYE_16 />
                <span> 220 lượt xem</span>
              </div>
              <div className="box__option-time">
                <ICON_MESSAGE_16 />
                <span>220 bình luận</span>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>



       position: relative;
      // height: 133px;
      margin-bottom: 16px;

      border-radius: 4px;
      padding: 0;
      width: calc(100%);

      &::after {
        display: block;
        content: "";
        padding-bottom: 50%;
      }
      img {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        border-radius: 4px;
        width: calc(100%);
        height: 100%;
        object-fit: cover;
        overflow: hidden;
      }

 <div className="box__content">
            {a.map((i, k) => (
              <a href="s" className="item" key={k}>
                <div className="box">
                  <div className="box__image">
                    <img src={news1} alt="" />
                  </div>
                  <div className="box__desc">
                    <div className="box__desc-title">
                      Apple Fitness + bổ sung bài tập cho người đang mang thai
                      và người lớn. Mọi người nên sử dụng
                    </div>
                    <div className="box__desc-summary">
                      Được dẫn dắt bởi huấn luyện viên (người sắp làm mẹ) Betina
                      Gozo và 2 người mẹ Được dẫn dắt bởi huấn luyện viên (người
                      sắp làm mẹ) Betina Gozo và 2 người mẹĐược dẫn dắt bởi huấn
                      luyện viên (người sắp làm mẹ) Betina Gozo và 2 người mẹ
                      Được dẫn dắt bởi huấn luyện viên (người sắp làm mẹ) Betina
                      Gozo và 2 người mẹ
                    </div>
                    <div className="box__desc-option">
                      <div className="time">
                        <ICON_CLOCK_16 />
                        <span>12:00, 20/08/2021</span>
                      </div>
                      <div className="time">
                        <ICON_EYE_16 />
                        <span>220</span>
                      </div>
                      <div className="time">
                        <ICON_MESSAGE_16 />
                        <span>220</span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
