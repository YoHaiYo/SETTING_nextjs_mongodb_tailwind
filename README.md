### 작업용 링크

- 배포링크 : https://setting-nextjs-mongodb-tailwind.vercel.app/
- 테일윈드 템플릿 : https://tailwindflex.com/
- html to jsx : https://transform.tools/html-to-jsx
- 폰트어썸아이콘 : https://fontawesome.com/search?o=r&m=free

### 폰트어썸 아이콘 넣는법

width로 크기조절하는게 젤 편함

```
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";
<FontAwesomeIcon icon={faUser} width={20} />
```

### 다음작업

몽고DB, API라우트 연결
