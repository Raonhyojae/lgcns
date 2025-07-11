#!/bin/bash

# Synology NAS 설정
NAS_USER="master"
NAS_IP="192.168.0.100"
NAS_PATH="/volume1/web/lgcns"

# 로컬 프로젝트 경로
PROJECT_DIR="C:/Users/chpark/program_rebuild/lgcns"

# NAS로 파일 복사
echo "🚀 Synology NAS에 파일 복사 시작..."
rsync -avz --delete "$PROJECT_DIR/" "$NAS_USER@$NAS_IP:$NAS_PATH"

# NAS에서 웹 서버 재시작
echo "🔄 NAS 웹 서버 재시작..."
ssh "$NAS_USER@$NAS_IP" "sudo systemctl restart apache2 || sudo systemctl restart nginx"

echo "✅ Synology NAS에 배포 완료!"
