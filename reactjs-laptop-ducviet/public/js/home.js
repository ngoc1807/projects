"user strict";

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();

  let isMobile = CheckMobile();

  if (isMobile) {
    HandleMobile();
  } else {
    HandleWeb();
  }
});

const HandleWeb = (params) => {
  //navbar header
  let left = document.getElementById("navbarWeb");
  if (left) {
    window.onscroll = function () {
      if (self.pageYOffset < 180) {
        left.classList.remove("sticky");
      } else if (self.pageYOffset > 180) {
        left.classList.add("sticky");
      }
    };
  }
  // product
  handleDropDownFilterWeb();
  // CartScreen
  // de truoc nhung ham sai trong man co check box radio
  handleInputCheckBoxAndRadioDeliveryInfo();

  //InstallmentScreen
  handleChoseTypeInstallmentWeb();

  //component common
  // checked-group-text
  handleCheckGroupText();
};
const HandleMobile = () => {
  //navbar header
  handleHeaderMobile();

  // product

  handleDropDownFilterMobile();
  ToolbarComparHomeMobile();
  // comparison bar on home screen
  handleCheckGroupText();

  // CartScreen
  // de truoc nhung ham sai trong man co check box radio
  handleInputCheckBoxAndRadioDeliveryInfo();
  //InstallmentScreen
  handleChoseTypeInstallmentMobile();

  //compare mobile
  handleDescCompareMobile();
};

const CheckMobile = (params) => {
  let isMobile = false;

  if (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
      navigator.userAgent
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
      navigator.userAgent.substr(0, 4)
    )
  ) {
    isMobile = true;
    return isMobile;
  }

  return isMobile;
};

//  handle filter  in list product web
const handleDropDownFilterWeb = () => {
  // Bộ lọc chính

  // show  list bo loc chinh
  $(".ListProductsWeb .ItemFilter .BoxOne__label-item  #btnMenuFilterWeb").on(
    "click",
    () => {
      $(".ListProductsWeb .ItemFilter .BoxOne__label-item .menu").toggle();

      for (let j = 0; j < listMenuBoxOne.length; j++) {
        // let current = listMenuBoxOne[j].className;
        // console.log(current);

        listMenuBoxOne[j].className = listMenuBoxOne[j].className.replace(
          " active",
          ""
        );
      }
    }
  );

  // close list
  $(
    ".ListProductsWeb .ItemFilter .BoxOne__label-item .menu-bottom #btnMenuFilterWeb"
  ).on("click", () => {
    $(".ListProductsWeb .ItemFilter .BoxOne__label-item .menu").css(
      "display",
      "none"
    );
  });

  //chose  multi list

  const listMainBoxOne = $(
    ".ListProductsWeb .ItemFilter .BoxOne__label-item .menu-content-item .list .list-item "
  );
  // console.log("list", list);
  for (let i = 0; i < listMainBoxOne.length; i++) {
    // list[i].on("click",()=>{

    // })
    // console.log(listMainBoxOne[i]);
    listMainBoxOne[i].addEventListener("click", () => {
      let current = listMainBoxOne[i].className;

      if (current.indexOf("active") > -1) {
        listMainBoxOne[i].className = listMainBoxOne[i].className.replace(
          " active",
          ""
        );
      } else {
        listMainBoxOne[i].className = listMainBoxOne[i].className + " active";
      }
    });
  }
  //   remove List BoxOne
  $(".ListProductsWeb .ItemFilter .BoxOne__label-item  #RemoveFilter").on(
    "click",
    () => {
      for (let i = 0; i < listMainBoxOne.length; i++) {
        let current = listMainBoxOne[i].className;
        if (current.indexOf("active") > -1) {
          listMainBoxOne[i].className = listMainBoxOne[i].className.replace(
            " active",
            ""
          );
        }
      }

      // let current = listMainBoxOne.getElementsByClassName("active");
      // console.log(current);
    }
  );
  //===============================================================

  // BoxTwo , Box Three

  const listMainBoxTwo = $(
    ".ListProductsWeb .ItemFilter .BoxTwo-content .list .list-item"
  );

  // console.log(listMainBoxTwo);

  for (let i = 0; i < listMainBoxTwo.length; i++) {
    // listMainBoxTwo.className = listMainBoxTwo.className.replace(" active", "");

    listMainBoxTwo[i].addEventListener("click", () => {
      let current = listMainBoxTwo[i].className;

      if (current.indexOf("active") > -1) {
        listMainBoxTwo[i].className = listMainBoxTwo[i].className.replace(
          " active",
          ""
        );
      } else {
        listMainBoxTwo[i].className = listMainBoxTwo[i].className + " active";
      }
    });
  }

  const listMainBoxThree = $(
    ".ListProductsWeb .ItemFilter .BoxThree-content .list .list-item"
  );

  // console.log(listMainBoxThree);

  for (let i = 0; i < listMainBoxThree.length; i++) {
    // list[i].on("click",()=>{

    // })
    // console.log("a", listMainBoxThree[i]);
    listMainBoxThree[i].addEventListener("click", () => {
      let current = listMainBoxThree[i].className;

      if (current.indexOf("active") > -1) {
        listMainBoxThree[i].className = listMainBoxThree[i].className.replace(
          " active",
          ""
        );
      } else {
        listMainBoxThree[i].className =
          listMainBoxThree[i].className + " active";
      }
    });
  }

  //===============================================================

  // show Item bộ lọc chính item hang ,gia ...
  const listBtnMenuBoxOne = $(
    ".ListProductsWeb .ItemFilter .BoxOne .BoxOne__content-item-btn"
  );
  const listMenuBoxOne = $(
    ".ListProductsWeb .ItemFilter .BoxOne .BoxOne__content-item .menu"
  );

  for (let i = 0; i < listBtnMenuBoxOne.length; i++) {
    const widthScreen = document.body.offsetWidth;
    console.log(widthScreen);

    const a = listBtnMenuBoxOne[i].getBoundingClientRect();
    // console.log(a.top, a.bottom, a.right, a.left);
    console.log("a", a.left);

    if (widthScreen >= 1230) {
      if (a.left > widthScreen / 2) {
        listMenuBoxOne[i].style.left = "unset";
        listMenuBoxOne[i].style.right = "0";
      }
    } else {
      if (a.left > widthScreen / 2) {
        listMenuBoxOne[i].style.left = "unset";
        listMenuBoxOne[i].style.right = "0";
      }
    }
  }

  // console.log("a", listBtnMenuBoxOne, typeof this.listBtnMenuBoxOne);
  // console.log("b", listMenuBoxOne);
  for (let i = 0; i < listBtnMenuBoxOne.length; i++) {
    listBtnMenuBoxOne[i].addEventListener("click", () => {
      const listMenuBoxOneTemp = $(
        ".ListProductsWeb .ItemFilter .BoxOne .BoxOne__content-item .menu"
      );

      // an filter bo loc neu co
      $(".ListProductsWeb .ItemFilter .BoxOne__label-item .menu").css(
        "display",
        "none"
      );

      // an het cac tab dang show
      // check nguoc lai vi bien da duoc khoi tao truoc khi click
      // khoi tao ngoai de cai khac dung
      for (let j = 0; j < listMenuBoxOneTemp.length; j++) {
        let current = listMenuBoxOneTemp[i].className;
        if (current.indexOf(" active") < 0) {
          listMenuBoxOneTemp[j].className = listMenuBoxOneTemp[
            j
          ].className.replace(" active", "");
        }
      }

      // show tab click

      let current = listMenuBoxOne[i].className;

      if (current.indexOf(" active") > -1) {
        listMenuBoxOneTemp[i].className = listMenuBoxOneTemp[
          i
        ].className.replace(" active", "");
      } else {
        listMenuBoxOneTemp[i].className =
          listMenuBoxOneTemp[i].className + " active";
      }

      // clear cac btn active khac
      for (let j = 0; j < listBtnMenuBoxOne.length; j++) {
        let current = listBtnMenuBoxOne[i].className;
        if (current.indexOf(" active") < 0) {
          listBtnMenuBoxOne[j].className = listBtnMenuBoxOne[
            j
          ].className.replace(" active", "");
        }
      }
      // active btn
      let currentBtn = listBtnMenuBoxOne[i].className;
      if (currentBtn.indexOf("active") > -1) {
        listBtnMenuBoxOne[i].className = listBtnMenuBoxOne[i].className.replace(
          " active",
          ""
        );
      } else {
        listBtnMenuBoxOne[i].className =
          listBtnMenuBoxOne[i].className + " active";
      }
    });
  }
  // co the lay menu dang active

  //cick remove item nhanh hang, gia ...
  const btnRemoveMenu = $(
    ".ListProductsWeb .ItemFilter .BoxOne .BoxOne__content-item .menu .menu-bottom .remove"
  );
  for (let i = 0; i < btnRemoveMenu.length; i++) {
    btnRemoveMenu[i].addEventListener("click", () => {
      // clear item da chon thong qua menu active
      const BtnItemMenuActiveBoxOne = $(
        ".ListProductsWeb .ItemFilter .BoxOne  .BoxOne__content-item  .menu.active .menu-content-item .list-item "
      );

      for (let j = 0; j < BtnItemMenuActiveBoxOne.length; j++) {
        BtnItemMenuActiveBoxOne[j].className = BtnItemMenuActiveBoxOne[
          j
        ].className.replace(" active", "");
      }
    });
  }

  //cick xem ket qua item nhanh hang, gia ...
  const btnResultMenu = $(
    ".ListProductsWeb .ItemFilter .BoxOne .BoxOne__content-item .menu .menu-bottom .result"
  );
  for (let i = 0; i < btnResultMenu.length; i++) {
    btnResultMenu[i].addEventListener("click", () => {
      // an menu

      const BtnItemMenuActiveBoxOne = $(
        ".ListProductsWeb .ItemFilter .BoxOne  .BoxOne__content-item  .menu.active  "
      );

      for (let j = 0; j < BtnItemMenuActiveBoxOne.length; j++) {
        BtnItemMenuActiveBoxOne[j].className = BtnItemMenuActiveBoxOne[
          j
        ].className.replace(" active", "");
      }
    });
  }

  // click list item hang ,gia ...
  // dung tat ca item cua cac menu
  const BtnItemMenuBoxOne = $(
    ".ListProductsWeb .ItemFilter .BoxOne .BoxOne__content-item .menu-content-item .list-item"
  );

  for (let i = 0; i < BtnItemMenuBoxOne.length; i++) {
    // console.log(BtnItemMenuBoxOne[i]);
    BtnItemMenuBoxOne[i].addEventListener("click", () => {
      let current = BtnItemMenuBoxOne[i].className;

      if (current.indexOf("active") > -1) {
        BtnItemMenuBoxOne[i].className = BtnItemMenuBoxOne[i].className.replace(
          " active",
          ""
        );
      } else {
        BtnItemMenuBoxOne[i].className =
          BtnItemMenuBoxOne[i].className + " active";
      }
    });
  }
};

// handle filter in list product  mobile
const handleDropDownFilterMobile = () => {
  //  khi click de hien thanh doc ben phai cua hear thi thay an bo loc

  setFilterToSticky = () => {
    $(".ListProductMobile .ListItem .boxOne__filter").css("position", "sticky");
  };
  setFilterToInitial = () => {
    $(".ListProductMobile .ListItem .boxOne__filter").css(
      "position",
      "initial"
    );
  };
  // click toogle ở heaaer thì k cho hiển thị bộ lọc
  $(".HeaderMobile .boxOne__toggle .btn__toggle.open").on("click", () => {
    setFilterToInitial();
  });
  $(".HeaderMobile .boxOne__toggle .btn__toggle.close1").on("click", () => {
    setFilterToSticky();
  });

  //box Two , three cua bo loc mobile
  const listMainBoxTwo = $(
    ".ListProductMobile .ItemFilter .BoxTwo-content .list .list-item"
  );

  // console.log(listMainBoxTwo);

  for (let i = 0; i < listMainBoxTwo.length; i++) {
    // listMainBoxTwo.className = listMainBoxTwo.className.replace(" active", "");

    listMainBoxTwo[i].addEventListener("click", () => {
      let current = listMainBoxTwo[i].className;

      if (current.indexOf("active") > -1) {
        listMainBoxTwo[i].className = listMainBoxTwo[i].className.replace(
          " active",
          ""
        );
      } else {
        listMainBoxTwo[i].className = listMainBoxTwo[i].className + " active";
      }
    });
  }

  const listMainBoxThree = $(
    ".ListProductMobile .ItemFilter .BoxThree-content .list .list-item"
  );

  // console.log(listMainBoxThree);

  for (let i = 0; i < listMainBoxThree.length; i++) {
    listMainBoxThree[i].addEventListener("click", () => {
      let current = listMainBoxThree[i].className;

      if (current.indexOf("active") > -1) {
        listMainBoxThree[i].className = listMainBoxThree[i].className.replace(
          " active",
          ""
        );
      } else {
        listMainBoxThree[i].className =
          listMainBoxThree[i].className + " active";
      }
    });
  }
  //======================================================================

  // set width menu theo man hinh
  const widthScreen = document.body.offsetWidth;
  // console.log(widthScreen);
  $(".ListProductMobile .ItemFilter .BoxOne__label-item .menu").css({
    width: widthScreen - 32,
  });

  // show boloc chinh ở box one
  const showMainFilterBoxOne = () => {
    $(
      ".ListProductMobile .ItemFilter .BoxOne__label-item  #btnMenuFilterMobile"
    ).on("click", () => {
      const classMenu = $(
        ".ListProductMobile .ItemFilter .BoxOne__label-item .menu"
      );
      // show thi thay doi thuoc tinh thanh bo loc khi scroll xuong
      if (classMenu[0].className.indexOf("active") > -1) {
        classMenu[0].className = classMenu[0].className.replace(" active", "");

        setFilterToSticky();
      } else {
        classMenu[0].className = classMenu[0].className + " active";
        setFilterToInitial();
      }

      //
      for (let j = 0; j < listMenuBoxOne.length; j++) {
        // let current = listMenuBoxOne[j].className;
        // console.log(current);
        listMenuBoxOne[j].className = listMenuBoxOne[j].className.replace(
          " active",
          ""
        );
      }
    });
  };
  showMainFilterBoxOne();

  // close list bộ lọc chinh khi click thanh xem ket qua
  $(
    ".ListProductsMobile .ItemFilter .BoxOne__label-item .menu-bottom #btnMenuFilterWeb"
  ).on("click", () => {
    $(".ListProductsMobile .ItemFilter .BoxOne__label-item .menu").css(
      "display",
      "none"
    );
  });
  //chose  multi list o danh sach bo loc chinh
  const listMainBoxOne = $(
    ".ListProductMobile .ItemFilter .box .BoxOne__label-item .menu-content-item .list-item"
  );
  // console.log("listMainBoxOne", listMainBoxOne.length);
  for (let i = 0; i < listMainBoxOne.length; i++) {
    listMainBoxOne[i].addEventListener("click", () => {
      let current = listMainBoxOne[i].className;

      if (current.indexOf("active") > -1) {
        listMainBoxOne[i].className = listMainBoxOne[i].className.replace(
          " active",
          ""
        );
      } else {
        listMainBoxOne[i].className = listMainBoxOne[i].className + " active";
      }
    });
  }
  //   remove List BoxOne cua bo loc chinh
  $(
    ".ListProductMobile .ItemFilter .box .BoxOne__label-item .menu-bottom .remove"
  ).on("click", () => {
    for (let i = 0; i < listMainBoxOne.length; i++) {
      let current = listMainBoxOne[i].className;
      if (current.indexOf("active") > -1) {
        listMainBoxOne[i].className = listMainBoxOne[i].className.replace(
          " active",
          ""
        );
      }
    }

    // let current = listMainBoxOne.getElementsByClassName("active");
    // console.log(current);
  });
  //======================================================================

  // show Item bộ lọc chính item hang ,gia ...

  const listBtnMenuBoxOne = $(
    ".ListProductMobile .ItemFilter .box .BoxOne__content-item-btn"
  );
  const listMenuBoxOne = $(
    ".ListProductMobile .ItemFilter .box .BoxOne__content-item .menu"
  );

  // set vi tri menu

  for (let i = 0; i < listBtnMenuBoxOne.length; i++) {
    const widthScreen = document.body.offsetWidth;
    // console.log(widthScreen);

    const a = listBtnMenuBoxOne[i].getBoundingClientRect();
    // console.log(a.top, a.bottom, a.right, a.left);
    // console.log("a", a.top);
    // console.log(listMenuBoxOne[i]);
    listMenuBoxOne[i].style.top = `${a.top - 211}px`;
    listMenuBoxOne[i].style.width = `${widthScreen - 32}px`;
    listMenuBoxOne[i].style.left = "16px";
  }

  for (let i = 0; i < listBtnMenuBoxOne.length; i++) {
    listBtnMenuBoxOne[i].addEventListener("click", () => {
      const listMenuBoxOneTemp = $(
        ".ListProductMobile .ItemFilter .BoxOne .BoxOne__content-item .menu"
      );

      // an filter bo loc neu co
      $(".ListProductMobile .ItemFilter .BoxOne__label-item .menu.active").attr(
        "class",
        "menu"
      );

      // an het cac tab dang show

      for (let j = 0; j < listMenuBoxOneTemp.length; j++) {
        let current = listMenuBoxOneTemp[i].className;
        if (current.indexOf(" active") < 0) {
          listMenuBoxOneTemp[j].className = listMenuBoxOneTemp[
            j
          ].className.replace(" active", "");
        }
      }

      // show tab click

      let current = listMenuBoxOne[i].className;

      if (current.indexOf(" active") > -1) {
        listMenuBoxOneTemp[i].className = listMenuBoxOneTemp[
          i
        ].className.replace(" active", "");

        setFilterToSticky();
      } else {
        setFilterToInitial();
        listMenuBoxOneTemp[i].className =
          listMenuBoxOneTemp[i].className + " active";
      }

      // clear cac btn active khac
      for (let j = 0; j < listBtnMenuBoxOne.length; j++) {
        let current = listBtnMenuBoxOne[i].className;
        if (current.indexOf(" active") < 0) {
          listBtnMenuBoxOne[j].className = listBtnMenuBoxOne[
            j
          ].className.replace(" active", "");
        }
      }
      // active btn
      let currentBtn = listBtnMenuBoxOne[i].className;
      if (currentBtn.indexOf("active") > -1) {
        listBtnMenuBoxOne[i].className = listBtnMenuBoxOne[i].className.replace(
          " active",
          ""
        );
      } else {
        listBtnMenuBoxOne[i].className =
          listBtnMenuBoxOne[i].className + " active";
      }
    });
  }

  //cick xem ket qua item nhanh hang, gia ...
  const btnResultMenu = $(
    ".ListProductMobile .ItemFilter .BoxOne .BoxOne__content-item .menu .menu-bottom .result"
  );
  for (let i = 0; i < btnResultMenu.length; i++) {
    btnResultMenu[i].addEventListener("click", () => {
      // an menu

      const BtnItemMenuActiveBoxOne = $(
        ".ListProductMobile .ItemFilter .BoxOne  .BoxOne__content-item  .menu.active  "
      );

      for (let j = 0; j < BtnItemMenuActiveBoxOne.length; j++) {
        BtnItemMenuActiveBoxOne[j].className = BtnItemMenuActiveBoxOne[
          j
        ].className.replace(" active", "");
      }

      setFilterToSticky();
    });
  }

  // click list item hang ,gia ...
  // dung tat ca item cua cac menu
  const BtnItemMenuBoxOne = $(
    ".ListProductMobile .ItemFilter .BoxOne .BoxOne__content-item .menu-content-item .list-item"
  );

  for (let i = 0; i < BtnItemMenuBoxOne.length; i++) {
    // console.log(BtnItemMenuBoxOne[i]);
    BtnItemMenuBoxOne[i].addEventListener("click", () => {
      let current = BtnItemMenuBoxOne[i].className;

      if (current.indexOf("active") > -1) {
        BtnItemMenuBoxOne[i].className = BtnItemMenuBoxOne[i].className.replace(
          " active",
          ""
        );
      } else {
        BtnItemMenuBoxOne[i].className =
          BtnItemMenuBoxOne[i].className + " active";
      }
    });
  }

  //cick remove item nhanh hang, gia ...
  const btnRemoveMenu = $(
    ".ListProductMobile .ItemFilter .BoxOne .BoxOne__content-item .menu .menu-bottom .remove"
  );
  for (let i = 0; i < btnRemoveMenu.length; i++) {
    btnRemoveMenu[i].addEventListener("click", () => {
      // clear item da chon thong qua menu active
      const BtnItemMenuActiveBoxOne = $(
        ".ListProductMobile .ItemFilter .BoxOne  .BoxOne__content-item  .menu.active .menu-content-item .list-item "
      );

      for (let j = 0; j < BtnItemMenuActiveBoxOne.length; j++) {
        BtnItemMenuActiveBoxOne[j].className = BtnItemMenuActiveBoxOne[
          j
        ].className.replace(" active", "");
      }
    });
  }
};
const handleHeaderMobile = () => {
  //navbar header
  // let header = document.getElementById("HeaderMobile");
  // if (header) {
  //   window.onscroll = function () {
  //     if (this.pageYOffset < 10) {
  //       header.classList.remove("sticky");
  //       header.style.zIndex = "1030";
  //     } else if (self.pageYOffset > 10) {
  //       header.classList.add("sticky");
  //       header.style.zIndex = "1041";
  //     }
  //   };
  // }
  let header = document.getElementById("HeaderMobile");
  if (header) {
    window.onscroll = function () {
      if (this.pageYOffset < 10) {
        header.style.position = "relative";
        header.style.zIndex = "1030";
      } else if (self.pageYOffset > 10) {
        header.style.position = "fixed";
        header.style.zIndex = "1041";
      }
    };
  }

  // btn search header mobile

  let headerBtnSearchOne = document.getElementById("headerBtnSearchOne");
  const headerBtnSearch = $(".HeaderMobile .boxOne__search")[0];
  const headerBtnSearchClose = document.getElementById("headerBtnSearchClose");
  headerBtnSearchOne.addEventListener("click", () => {
    let current = headerBtnSearch.className;

    if (current.indexOf("active") === -1) {
      headerBtnSearch.className = headerBtnSearch.className + " active";
    }
  });

  headerBtnSearchClose.addEventListener("click", () => {
    headerBtnSearch.className = headerBtnSearch.className.replace(
      " active",
      ""
    );
  });

  // btn toggle header mobile

  // const btnToggle = $(".HeaderMobile .boxOne .boxOne__toggle");
  $(".HeaderMobile .boxOne .boxOne__toggle .open").on("click", () => {
    $(".HeaderMobile .boxOne .boxOne__toggle").addClass(" active");
  });
  $(".HeaderMobile .boxOne .boxOne__toggle .close1").on("click", () => {
    $(".HeaderMobile .boxOne .boxOne__toggle").removeClass("active");
  });

  // click thanh chon ben trai menu
  const listMenuLeft = $(
    ".HeaderMobile .boxOne__toggle .menu-item .menu-item-label"
  );
  const listContentMenuRight = $(
    ".HeaderMobile .boxOne__toggle .menu-item .menu-item-content"
  );

  // console.log(listContentMenuRight);
  for (let i = 0; i < listMenuLeft.length; i++) {
    for (let i = 1; i < listContentMenuRight.length; i++) {
      listContentMenuRight[i].style.display = "none";
    }

    listMenuLeft[i].addEventListener("click", () => {
      for (let i = 0; i < listContentMenuRight.length; i++) {
        listContentMenuRight[i].style.display = "none";
      }

      for (let i = 0; i < listMenuLeft.length; i++) {
        listMenuLeft[i].className = listMenuLeft[i].className.replace(
          " active",
          ""
        );
      }

      let current = listMenuLeft[i].className;
      if (current.indexOf("active") > -1) {
        listMenuLeft[i].className = listMenuLeft[i].className.replace(
          " active",
          ""
        );
      } else {
        listMenuLeft[i].className = listMenuLeft[i].className + " active";
      }

      listContentMenuRight[i].style.display = "block";
    });
  }
};

function ToolbarComparHomeMobile(params) {
  const widthScreen = document.body.offsetWidth;

  const itemCompare = $(
    ".HomeMobile .CompareProductHome .box .list .itemCompare"
  );

  if (itemCompare.length > 0) {
    for (let i = 0; i < itemCompare.length; i++) {
      itemCompare[i].style.width = `${widthScreen / 2 - 64}px`;
    }
  }
}

function handleInputCheckBoxAndRadioDeliveryInfo() {
  const checkBoxItem = $(".CheckBoxCustom .containerLabel input");
  const checkBoxClassItem = $(".CheckBoxCustom");

  for (let i = 0; i < checkBoxItem.length; i++) {
    if (checkBoxItem[i].checked === true) {
      checkBoxClassItem[i].className =
        checkBoxClassItem[i].className + " active";
    } else {
      checkBoxClassItem[i].className = checkBoxClassItem[i].className.replace(
        " active",
        ""
      );
    }

    // checkBoxItem[i].style.display = "none";
    checkBoxItem[i].addEventListener("click", () => {
      console.log(checkBoxItem[i].checked);
      if (checkBoxItem[i].checked === true) {
        checkBoxClassItem[i].className =
          checkBoxClassItem[i].className + " active";
      } else {
        checkBoxClassItem[i].className = checkBoxClassItem[i].className.replace(
          " active",
          ""
        );
      }
    });
  }
  // console.log("checkBoxItem", checkBoxItem);

  const RadioBoxItem = $(".RadioCustom  input");
  const RadioBoxClassItem = $(".RadioCustom");

  // console.log(RadioBoxClassItem);

  for (let i = 0; i < RadioBoxItem.length; i++) {
    if (RadioBoxItem[i].checked === true) {
      RadioBoxClassItem[i].className =
        RadioBoxClassItem[i].className + " active";
    } else {
      RadioBoxClassItem[i].className = RadioBoxClassItem[i].className.replace(
        " active",
        ""
      );
    }
    // RadioBoxItem[i].style.display = "none";
    RadioBoxItem[i].addEventListener("click", () => {
      const tempNameRadio = RadioBoxItem[i].getAttribute("name");

      if (RadioBoxItem[i].checked === true) {
        for (let j = 0; j < RadioBoxItem.length; j++) {
          if (RadioBoxItem[j].getAttribute("name") === tempNameRadio) {
            RadioBoxClassItem[j].className = RadioBoxClassItem[
              j
            ].className.replace(" active", "");
          }
        }
        if (RadioBoxItem[i].className.indexOf("active") >= -1) {
          // console.log(RadioBoxItem[i].className.indexOf("active"));
          RadioBoxClassItem[i].className =
            RadioBoxClassItem[i].className + " active";
        }
      } else {
        RadioBoxClassItem[i].className = RadioBoxClassItem[i].className.replace(
          " active",
          ""
        );
      }
    });
  }
}

function handleCheckGroupText() {
  const list = $(".checked-group-text");
  for (let i = 0; i < list.length; i++) {
    const listId = list[i].id;

    const listChild = $(`.checked-group-text#${listId} .item`);

    for (let j = 0; j < listChild.length; j++) {
      listChild[j].addEventListener("click", () => {
        // clear active

        for (let j = 0; j < listChild.length; j++) {
          listChild[j].className = listChild[j].className.replace(
            " active",
            ""
          );
        }

        if (listChild[j].className.indexOf("active") < 0) {
          listChild[j].className = listChild[j].className + " active";
        } else {
          // listChild[j].className = listChild[j].className.replace(
          //   " active",
          //   ""
          // );
        }
      });
    }

    // console.log("id", a);
  }
}

function handleChoseTypeInstallmentWeb() {
  const list = $(
    ".InstallmentWeb .ContentItem .PaymentsItem .BoxOne .content .RadioCustom"
  );

  const listContent = $(".InstallmentWeb .ContentItem #PaymentsInfo-0");

  for (let i = 0; i < list.length; i++) {
    if (list[i].className.indexOf("active") < 0) {
      listContent[i].style.display = "none";
    } else {
      listContent[i].style.display = "block";
    }
    list[i].addEventListener("click", () => {
      listContent[i].style.display = "block";

      for (let i = 0; i < list.length; i++) {
        if (list[i].className.indexOf("active") < 0) {
          listContent[i].style.display = "none";
        } else {
          listContent[i].style.display = "block";
        }
      }
    });
  }
}
function handleChoseTypeInstallmentMobile() {
  const list = $(
    ".InstallmentMobile .ContentItem .PaymentsItem .BoxOne .content .RadioCustom"
  );

  const listContent = $(".InstallmentMobile .ContentItem #PaymentsInfo-0");

  for (let i = 0; i < list.length; i++) {
    console.log(list[i].className.indexOf("active"));

    if (list[i].className.indexOf("active") < 0) {
      listContent[i].style.display = "none";
    } else {
      listContent[i].style.display = "block";
    }
    list[i].addEventListener("click", () => {
      listContent[i].style.display = "block";

      for (let i = 0; i < list.length; i++) {
        if (list[i].className.indexOf("active") < 0) {
          listContent[i].style.display = "none";
        } else {
          listContent[i].style.display = "block";
        }
      }
    });
  }
}

function handleDescCompareMobile() {
  const box = $(".CompareProduct .ContentItem .box__item-desc3 ul.box li");
  const icon = $(
    ".CompareProduct .ContentItem .box__item-desc3 ul.box li .icon"
  );

  const text = $(
    ".CompareProduct .ContentItem .box__item-desc3 ul.box li .text"
  );
  const listItem = $(".CompareProduct .ContentItem .box__item-desc3 ul.box li");
  // console.log(text, "text");

  if (!listItem || !text) return;

  for (let i = 0; i < text.length; i++) {
    // get number line of div
    const divHeight = text[i].offsetHeight;
    const lines = divHeight / 16;

    if (lines >= 3) {
      // icon[i].style.display = "flex";
      // iconUp[i].style.display = "none";
      listItem[i].classList = listItem[i].classList + " active";
    }
  }
  // console.log("iconDown", iconDown);

  for (let i = 0; i < icon.length; i++) {
    icon[i].addEventListener("click", () => {
      if (text[i].className.indexOf("show") < 0) {
        text[i].className = text[i].className + " show";
      } else {
        text[i].className = text[i].className.replace(" show", "");
      }
    });
  }

  // for (let i = 0; i < iconUp.length; i++) {
  //   iconUp[i].addEventListener("click", () => {
  //     if (text[i].className.indexOf("show") < 0) {
  //       text[i].className = text[i].className + " show";

  //       iconDown[i].style.display = "none";
  //       iconUp[i].style.display = "flex";
  //     } else {
  //       text[i].className = text[i].className.replace(" show", "");

  //       iconDown[i].style.display = "flex";
  //       iconUp[i].style.display = "none";
  //     }
  //   });
  // }

  // iconDown.forEach((element) => {
  //   console.log("element", element);

  //   element.addEventListener("click", () => {
  //     if (element.className.indexOf("active") < 0) {
  //       element.className = element.className.replace(" show", "");
  //     } else {
  //       element.className = element.className + " show";
  //     }
  //   });
  // });
}
