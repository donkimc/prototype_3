  $(document).ready(function () {
    // local storage
    if (typeof(Storage) !== "undefined") {
      console.log('your browser is ready');
      if (!localStorage.id) {
        localStorage.id = 1;
      }
    }
    else {
      console.log("your browser does not support web storage.")
    }
      // information page
    $('#info').click(function(e) {
      e.preventDefault();
      console.log('information');
      swal.fire({
        heightAuto: false,
        html: "래빗방의 모험 <br> 문의사항은 여기로 전화하세요. <br> 010-2222-3333 "
      });
    });

    // when code is entered
    $('#code-form').submit(function(e){
      e.preventDefault();
      console.log('ready');
      var code = $('#code').val();

      if (code == '181818') {
        console.log('correct');

        // swal.fire({
        //   heightAuto: false,
        //   text: "코드가 맞습니다. 다음단계로 넘어갑니다. "
        // });
        $('#section-2').load( './start.html' );
      }
      else {
        swal.fire({
          heightAuto: false,
          text: "코드가 틀립니다. 다시 시도해주세요. "
        });
      }
    });
    // start page to next
    $('#start').click(function(e) {
      e.preventDefault();
      console.log('start');
      url = './page1.html';
      window.location.href = url;
    });
});
