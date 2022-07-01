### 깃의 특징

---

- 협업이 용이.
- 가볍고 빠르다.
- 분산작업.

### Git Branch

---

- git branch <브랜치이름> : 브랜치 생성
- git checkout <브랜친이름> : 브렌치 전환
- git checkout <16진수> : 스냅샷을 넘나들때 사용

### Git Merge

---

- git checkout master : 마스터 브랜치로 이동
- git merge <합칠 브랜치 이름> : 병합

합칠 브랜치의 내용이 마스터 브랜치에서 업데이트 된 내용이기 때문에 곧바로 merge가 되는 것을 확인 할 수 있다.

이렇게 merge가 이루어지는 것을 fast-forward라고 부름.

### 갈라지는 branch

---

> 파일을 동시에 수정한 경우

- git log --graph -all을 사용하면 commit graph를 확인할 수 있음 .

- git checkout master : 마스터 브랜치로 이동
- git merge <합칠 브랜치 이름> : 병합 >> `새로운 체크포인트로 병합됨. `

- git branch --merged : 병합된 브랜치를 한눈에 볼 수 있음.

### Git Branch 삭제

> 사용을 마친 branch는 `git branch -d <branch name>` 을 이용하여 삭제

- 사용을 마친 브랜치는 삭제하는게 좋음.

### Merge conflict

---

> merge한 두 branch에서 `같은 파일을 변경했을 때 충돌`이 발생

- 수정 완료 후 `git add `, `git commit` 과정을 거쳐 다시 Merge 해줌.

- master 브랜치를 수정하는 일은 자제하는 것이 좋음.

### 원격저장소와 연결

---

> git clone <주소>를 사용해 원격저장소에 있는 레포지토리를 복사하고
> git remote add origin <주소> 로 로컬저장소와 연결

- git remote를 입력했을 떄 아무것도 나타나지 않으면 원격저장소와 연결 x

### pull , fetch (원격저장소와 동기화)

---

> `pull` 은 원격 저장소에서 데이터를 가져와 로컬 데이터와 병합합니다.

> `fetch `는 명령어로 변경된 파일을 확인하고 Merge해줍니다.

- git log origin/master
- git merge origin/master

### 저장소 발행

---

> git push origin master

- 다른 사람이 `Push한 상태에서는 Push할 수 없고` 다른 사람이 작업한 것을 `Merge부터` 해야한다.
