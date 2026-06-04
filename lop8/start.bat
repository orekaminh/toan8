@echo off
chcp 65001 >nul
echo ============================================
echo   Tu hoc Toan 8 - May chu cuc bo
echo   Trang web se mo tai: http://localhost:8000
echo   Nhan Ctrl+C de dung may chu.
echo ============================================
cd /d "%~dp0"

where python >nul 2>nul
if %errorlevel%==0 (
  start "" http://localhost:8000
  python -m http.server 8000
  goto :eof
)

where py >nul 2>nul
if %errorlevel%==0 (
  start "" http://localhost:8000
  py -m http.server 8000
  goto :eof
)

where node >nul 2>nul
if %errorlevel%==0 (
  start "" http://localhost:8000
  npx --yes http-server -p 8000 -c-1
  goto :eof
)

echo.
echo Khong tim thay Python hoac Node.js tren may.
echo Ban van co the mo truc tiep file "index.html" bang trinh duyet (nhap dup chuot).
pause
