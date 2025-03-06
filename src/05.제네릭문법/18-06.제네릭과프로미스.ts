/**
 * 제네릭과 프로미스
 */

{
  // 통신 성공했을 경우에..
  const promise = new Promise<number>((resolve, reject) => {
    // AIP 서버도 없고 데이터를 받아올 것이 없기 때문에..
    // 비동기 처리를 하기 위해서 setTimeout 을 이용
    setTimeout(() => {
      resolve(20);
    }, 3000);
  });

  // 성공했다고 가정하고..
  promise.then((res) => {
    // unknown 타입이라서 곱셈연산을 할 수 없어서 타입 오류가 발생
    // Promise<number> 제네릭 number 로 전달하면 오류 없어짐
    console.log(res * 10); // 20
  });
}

{
  // 통신 실패했을 경우에..
  const promise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
      // reject 는 reason?: any 타입으로 구현(정의)되어 있음
      reject("~~~ 때문에 실패함");
    }, 3000);
  });

  // 성공했다고 가정하고..
  promise
    .then((res) => {
      console.log(res * 10); // 20
    })
    .catch((err) => {
      // error 의 타입이 any 타입으로 넘어오기 때문에(프로미스가 그렇게 구현되어 있음)
      // 그래서 프로젝트 상황에 따라서 타입 좁히기를 하여 사용해야함
      if (typeof err === "string") {
        console.log(err);
      }
    });
}

// #######################################################################3

{
  /**
   * 프로미스를 반환하는 함수의 타입을 정의
   */
  // 서버로부터 게시글의 데이터를 불러오는 함수를 만든다고 가정했을 때

  // 게시글의 타입 정의
  interface Post {
    id: number;
    title: string;
    content: string;
  }

  // 게시글 불러오는 함수
  // 1번 방법 : new Promise<Post>
  function fetchPost() {
    return new Promise<Post>((resolve, reject) => {
      setTimeout(() => {
        resolve({
          id: 1,
          title: "게시글 제목",
          content: "게시글 콘텐츠",
        });
      }, 3000);
    });
  }

  const postRequest = fetchPost();

  postRequest.then((post) => {
    post.id;
  });

  {
    // 2번 방법 : function fetchPost(): Promise<Post>
    // 함수에 반환값을 직접 정의한 방법
    function fetchPost(): Promise<Post> {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            id: 1,
            title: "게시글 제목",
            content: "게시글 콘텐츠",
          });
        }, 3000);
      });
    }

    const postRequest = fetchPost();

    postRequest.then((post) => {
      post.id;
    });
  }

  // #######################3
  /**
   * 협업의 관점에서 보았을 때
   * 함수의 선언문만 보고도 패치함수가 어떤 것을 반환하는지 바로 알 수 있기 때문에
   * 협업의 관점에서 코드의 가독성이 좋아진다.
   * 위 코드는 짧기 때문에 return 문을 바로 찾을 수 있지만
   * 코드가 길 경우에는 return 문을 찾아야 하는 번거로움이 발생할 수 있다.
   */
}
