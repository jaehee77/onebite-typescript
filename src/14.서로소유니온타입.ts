/**
 * 서로소 유니온 타입(disjoint union type)
 * -> 교집합이 없는 타입들로만 만든 유니온 타입을 말함
 */

{
  type Admin = {
    tag: "ADMIN";
    name: string;
    kickCount: number;
  };

  type Member = {
    tag: "MEMBER";
    name: string;
    point: number;
  };

  type Guest = {
    tag: "GUEST";
    name: string;
    visitCount: number;
  };

  type User = Admin | Member | Guest;

  // Admin -> {name} 님 현재까지 {kickCount} 명 강퇴했습니다.
  // Member -> {name} 님 현재까지 {point} 점을 보유하셨습니다.
  // Guest -> {name} 님은 현재까지 {visitCount} 번 방문하셨습니다.

  /**
   * 직관적이지 않은 코드
   */
  function login(user: User) {
    if ("kickCount" in user) {
      // admin 타입일 경우
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
    } else if ("point" in user) {
      // member 타입일 경우
      console.log(`${user.name}님 현재까지 ${user.point}점 보유하셨습니다.`);
    } else if ("visitCount" in user) {
      // guest 타입일 경우
      console.log(
        `${user.name}님은 현재까지 ${user.visitCount}번 방문하셨습니다.`
      );
    }
  }

  /**
   * 서로소 유니온 타입을 사용하면 타입 추론이 쉬워짐
   * 직관적인 코드
   */
  function login2(user: User) {
    if (user.tag === "ADMIN") {
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
    } else if (user.tag === "MEMBER") {
      console.log(`${user.name}님 현재까지 ${user.point}점 보유하셨습니다.`);
    } else if (user.tag === "GUEST") {
      console.log(
        `${user.name}님은 현재까지 ${user.visitCount}번 방문하셨습니다.`
      );
    }
  }

  // 좀더 개선한 코드
  function login3(user: User) {
    switch (user.tag) {
      case "ADMIN":
        console.log(
          `${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`
        );
        break;
      case "MEMBER":
        console.log(`${user.name}님 현재까지 ${user.point}점 보유하셨습니다.`);
        break;
      case "GUEST":
        console.log(
          `${user.name}님은 현재까지 ${user.visitCount}번 방문하셨습니다.`
        );
        break;
    }
  }
}

{
  /**
   * 복습겸 다른 예제
   * 개선전 코드
   */

  type AsyncTask = {
    state: "LOADING" | "FAILED" | "SUCCESS";
    error?: {
      message: string;
    };
    response?: {
      data: string;
    };
  };

  // 비동기 작업의 결과를 처리하는 객체
  const loading = {
    state: "LOADING",
  };

  const failed = {
    state: "FAILED",
    error: {
      message: "오류 발생 원인은...",
    },
  };

  const success = {
    state: "SUCCESS",
    response: {
      data: "데이터 성공...",
    },
  };

  // 로딩중 -> 콘솔에 로딩중 출력
  // 실패 -> 실패 : 에러메시지를 출력
  // 성공 -> 성공 : 데이터를 출력
  function processTask(task: AsyncTask) {
    switch (task.state) {
      case "LOADING":
        console.log("로딩중");
        break;0
      case "FAILED":
        console.log(`실패 : ${task.error.message}`); // 타입 좁히기를 했는데 오류 발셍
        // console.log(`실패 : ${task.error?.message}`); // 이거를 원한 것이 아님
        break;
      case "SUCCESS":
        console.log(`성공 : ${task.response.data}`); // 타입 좁히기를 했는데 오류 발셍
        // console.log(`성공 : ${task.response!.data}`); // 이거를 원한 것이 아님
        break;
    }
  }
}
{
  /**
   * 복습겸 다른 예제
   * 개선후 코드
   */

  type LoadingTask = {
    state: "LOADING";
  };

  type FailedTask = {
    state: "FAILED";
    error: {
      message: string;
    };
  };

  type SuccessTask = {
    state: "SUCCESS";
    response: {
      data: string;
    };
  };

  type AsyncTask = LoadingTask | FailedTask | SuccessTask;

  // 비동기 작업의 결과를 처리하는 객체
  const loading = {
    state: "LOADING",
  };

  const failed = {
    state: "FAILED",
    error: {
      message: "오류 발생 원인은...",
    },
  };

  const success = {
    state: "SUCCESS",
    response: {
      data: "데이터 성공...",
    },
  };

  function processTask(task: AsyncTask) {
    switch (task.state) {
      case "LOADING":
        console.log("로딩중");
        break;
      case "FAILED":
        console.log(`실패 : ${task.error.message}`); // 타입 좁히기를 했는데 오류 발셍
        break;
      case "SUCCESS":
        console.log(`성공 : ${task.response.data}`); // 타입 좁히기를 했는데 오류 발셍
        break;
    }
  }
}
