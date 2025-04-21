/**
 * 맵드 타입 기반의 유틸리티 타입들
 * Pick<T>
 * Omit<T>
 * Record<T>
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
   * Pick<T>
   * -> 뽑다, 고르다
   * -> 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 타입
   * ###########
   */

  const legacyPost: Pick<Post, "title" | "content"> = {
    title: "옛날 글..",
    content: "옛날 콘텐츠..",
  };

  {
    // ########
    // custom Pick 만들기
    // keyof T 를 풀어보면 'title' | 'tags' | 'content' | 'thumbnailURL'
    type PickCustom<T, K extends keyof T> = {
      [key in K]: T[key];
    };

    const pickPost: PickCustom<Post, "tags" | "thumbnailUR"> = {
      tags: ["a"],
      thumbnailUR: "http://....",
    };
  }
}

//=================================================================

{
  /**
   * ###########
   * Omit<T>
   * -> 생략하다, 빼다
   * -> 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
   * ###########
   */

  const noTitlePost: Omit<Post, "title"> = {
    content: "",
    tags: [],
    thumbnailUR: "",
  };

  {
    // custom Omit 타입 만들기

    type OmitCustom<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
    // T => Post, K => 'title'
    // Pick<Post, Exclude<keyof Post, 'title'>>
    // Pick<Post, Exclued<'title' | 'content' | 'tags' | 'thumbnailURL', 'title'>> // Exclude -> 특정 타입 제거하는 타입
    // Pick<Post, 'content' | 'tags' | 'thumbnailURL'>
    // 결과 'content' | 'tags' | 'thumbnailURL'

    const noTitlePost: OmitCustom<Post, "title"> = {
      content: "",
      tags: [],
      thumbnailUR: "",
    };
  }
}

//=================================================================

{
  /**
   * ###########
   * Record<T>
   * -> 객체 타입을 만들어주는 유틸리티 타입으로
   * -> 겍채의 프로퍼티 키를 value 는 키들의 값
   * 레코드 타입을 이용하면 동일한 패턴을
   * 갖는 객체 타입을 쉽게 정의 가능
   * ###########
   */

  type ThumbnailLegacy = {
    large: {
      url: string;
    };
    medium: {
      url: string;
    };
    small: {
      url: string;
    };
    watch: {
      url: string;
    };
  };

  // Thumnail 에 마우스커서를 올려보면 ThumbnailLegacy 같은 타입이 생성되어 있음
  type Thumnail = Record<
    "large" | "medium" | "small" | "watch",
    { url: string; size: number }
  >;

  {
    // custom Record 타입 만들기
    // keyof any -> 어떤 객체인지는 모르겠는데 어떤 객체의 키타입이야..라고 해줌
    type RecordCustom<K extends keyof any, V> = {
      [key in K]: V;
    };

    type Thumnail = RecordCustom<
      "large" | "medium" | "small" | "watch",
      { url: string; size: number }
    >;
  }
}
