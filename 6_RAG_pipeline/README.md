# RAG Pipeline v2

AI 문서 검색 및 챗봇 시스템 (Retrieval-Augmented Generation)

## 프로젝트 구조

```
6_RAG_pipeline/
├── backend/                  # FastAPI 백엔드 (문서 관리 + 챗봇 API)
│   ├── main.py              # API 엔드포인트
│   ├── db/                  # 데이터베이스 관리
│   └── lambda/              # AWS Lambda 함수
├── frontend/                 # React 프론트엔드 (문서 관리 + 챗봇 UI)
├── requirements.txt          # Python 의존성
└── .env.example              # 환경 변수 템플릿
```

## 기술 스택

**Backend**
- FastAPI (API 서버)
- PostgreSQL + pgvector (벡터 데이터 저장)
- AWS S3 (문서 저장)
- AWS Bedrock (LLM, 임베딩)
- LangChain (RAG 구현)

**Frontend**
- React + TypeScript

## 빠른 시작

### 환경 설정

```bash
# Python 가상환경 생성
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# 의존성 설치
pip install -r requirements.txt

# 환경 변수 설정
cp .env.example .env
# .env 파일에 다음 항목 입력:
# - DB_HOST, DB_NAME, DB_USER, DB_PASSWORD (PostgreSQL)
# - BUCKET_NAME (AWS S3)
```

### Backend 실행

```bash
cd backend
uvicorn main:app --reload --port 8000
```

### Frontend 실행

```bash
cd frontend
npm install
npm start
```

### 실행 포트

| 서비스 | 포트 |
|--------|------|
| Backend (FastAPI) | 8000 |
| Frontend (React Dev) | 3000 |

## 주요 기능

### 문서 관리
- 문서 업로드 및 S3 저장
- 벡터 DB 관리
- 문서 삭제
- WebSocket 기반 실시간 스트리밍

### 챗봇
- RAG 기반 질의응답
- 참고 문서 출처 제공
- 대화 세션 관리

## API 엔드포인트 (포트 8000)

### 문서 관리
- `GET /api/documents` - 문서 목록 조회
- `GET /api/admin/documents` - 관리자용 문서 목록 (S3 키 포함)
- `POST /api/admin/documents` - 문서 업로드
- `DELETE /api/admin/documents/{id}` - 문서 삭제

### 챗봇
- `POST /api/chat` - 질의응답
- `DELETE /api/chat-history/{session_id}` - 대화 기록 삭제
- `WebSocket /ws/chat` - 실시간 채팅

## 환경 변수

```
DB_HOST=          # PostgreSQL 호스트
DB_NAME=          # 데이터베이스 이름
DB_USER=          # DB 사용자명
DB_PASSWORD=      # DB 비밀번호
BUCKET_NAME=      # AWS S3 버킷명
```
