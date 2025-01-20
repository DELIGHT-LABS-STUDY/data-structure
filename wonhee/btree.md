# Btree

## B-tree

일반적으로 Btree 라고 하면 B-tree를 의미함

이름은 Bayer와 McCreight가 제안한 이름인데 의미를 밝히지 않았지만,

Balanced Tree의 약자로 추정됨

### B-tree의 특징

B-tree는 균형 트리로서, 모든 리프 노드가 같은 레벨에 있음

각 노드에 key, data를 모두 저장함

정렬, 탐색 방식이 이진 트리와 유사하지만

- 자식이나 한 노드에 여러 개의 key를 가질 수 있고
- 모든 리프가 같은 레벨에 있도록 유지하는 점이 다름

각 노드가 갖는 키의 개수가 정해진 차수를 가짐 - 이걸 유지하기 위해 삽입/삭제 시 높이 조정 발생

각 노드가 갖는 자식의 최대 수 = degree 차수

M차 B트리 = 노드가 최대 M/2개부터 M개까지의 key를 가질 수 있는 B트리

### 탐색 예시

![btree-search](./btree-search.png)
![btree-search2](./btree-search2.png)

### 파일 시스템 예시

`/home/user/documents/file.txt` 같은 경로에서

디렉토리/파일 -> inode 번호 매핑 (인덱싱)
home: 100
documents: 150
file.txt: 200

```
                  [home]
               /         \
[documents, downloads] [pictures]
    |
[file.txt]
```

삽입 예시:

- 새로운 파일 'new.txt'(inode: 180) 추가: documents -> new.txt

각 노드의 key, data:

- 키: inode 번호
- 데이터: 메타데이터
  - 파일명
  - 권한
  - 생성일자
  - 크기
  - ...

## B+tree

실제 DB 구현에는 B+tree를 주로 사용함
B+tree: 리프 노드에만 데이터를 저장, 내부 노드는 키만 가짐(인덱스 역할)

```
B-tree:
     [15 | 25]
    /    |    \
[10]  [20]   [30]

B+tree:
     [15 | 25]
    /    |    \
[10] -> [20] -> [30]
```

따라서 범위 검색에 매우 효율적임
