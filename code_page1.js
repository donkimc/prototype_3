$(document).ready(function () {

  // information page
  $('#info').click(function(e) {
    e.preventDefault();
    console.log('information');
    swal.fire({
      heightAuto: false,
      html: "래빗방의 모험 <br> 문의사항은 여기로 전화하세요. <br> 010-2222-3333 "
    });
  });
  // going to next page
  $('#page1-1-next').click(function() {
    console.log('second-page')
    $('#section-2').load( 'page1_2.html' );
  });

  // checking answers
  // id answer is textbox
  // id enter is arrow to check answer and go to next page
  $('#enter').click(function(e) {
      e.preventDefault();
      console.log('answer2');
      var answer = $('#answer').val();

      if (answer == 'LILY') {
        swal.fire({
          heightAuto: false,
          text: "다음 페이지로 이동"
        });
      } else {
      swal.fire({
        heightAuto: false,
        html: "답이 뜰립니다. <br> 힌트: 영문 대문자 4글자 입니다. <br> L로 시작 "
      });
    }
  });

});
