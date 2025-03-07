/**
 * 맵드 타입 기반의 유틸리티 타입들
 * Partial<T>
 * Required<T>
 * Readonly<T>
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailUR?: string;
}

{
  /**
   * ###########
   * Partial<T>
   * ###########
   * -> 부분적인, 일부분의
   * -> 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티 바꿔주는 타입
   */

  const draft: Partial<Post> = {
    title: "제목 나중에 짓자",
    content: "초안...",
  };
}

{
  /**
   * Custom Partial 만들기
   */
  type PartialCustom<T> = {
    [key in keyof T]?: T[key];
  };

  const draft: PartialCustom<Post> = {
    title: "제목 나중에 짓자",
    content: "초안...",
  };
}

{
  /**
   * ###########
   * Required<T>
   * ###########
   * -> 필수의, 필수적인
   * -> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
   */

  const withThumbnailPost: Required<Post> = {
    title: "한입 타스",
    tags: ["ts"],
    content: "",
    thumbnailUR: "https://...",
  };

  {
    // custom required 타입만들기
    // -? => 선택적인 것을 빼버리겠다란 의미
    // 즉, 필수로 만들어버림
    type RequiredCustom<T> = {
      [key in keyof T]-?: T[key];
    };

    const withThumbnailPost2: RequiredCustom<Post> = {
      title: "한입 타스",
      tags: ["ts"],
      content: "",
      thumbnailUR: "https://...",
    };
  }
}
{
  /**
   * ###########
   * Readonly<T>
   * ###########
   * -> 읽기전용, 수정불가
   * -> 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입
   */

  const withThumbnailPost: Readonly<Post> = {
    title: "한입 타스",
    tags: ["ts"],
    content: "",
    thumbnailUR: "https://...",
  };

  withThumbnailPost.title = "한입먹기"; // 오류 발생

  {
    // custom readonly 타입 만들기
    type ReadonlyCustom<T> = {
      readonly [key in keyof T]: T[key];
    };

    const withThumbnailPost: Readonly<Post> = {
      title: "한입 타스",
      tags: ["ts"],
      content: "",
      thumbnailUR: "https://...",
    };

    withThumbnailPost.content = "읽기전용 속성이 됨"; // 오류 발생
  }
}
