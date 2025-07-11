#!/bin/bash

# GitHub 저장소 URL
REPO_URL="https://github.com/raonhyojae/lgcns.git"

# 로컬 프로젝트 경로
PROJECT_DIR="C:/Users/chpark/program_rebuild/lgcns"

# GitHub에 푸시
echo "🚀 GitHub에 코드 푸시 시작..."
cd "$PROJECT_DIR" || exit

# Git 초기화 및 설정
if [ ! -d .git ]; then
    git init
    git remote add origin "$REPO_URL"
fi

# Git 커밋 및 푸시
git add .
git commit -m "자동 배포: $(date)"
git branch -M main
git push -u origin main

echo "✅ GitHub에 코드 푸시 완료!"
