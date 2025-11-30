import json
import os
from typing import Dict, Any
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Send contact form data to email via SMTP
    Args: event with httpMethod, body (name, phone, email)
    Returns: HTTP response with success/error status
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    body_data = json.loads(event.get('body', '{}'))
    name = body_data.get('name', '')
    phone = body_data.get('phone', '')
    email = body_data.get('email', '')
    
    if not all([name, phone, email]):
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({'error': 'All fields are required'})
        }
    
    # Получаем SMTP настройки из переменных окружения
    smtp_host = os.environ.get('SMTP_HOST', 'smtp.gmail.com')
    smtp_port = int(os.environ.get('SMTP_PORT', '587'))
    smtp_user = os.environ.get('SMTP_USER', '')
    smtp_password = os.environ.get('SMTP_PASSWORD', '')
    recipient_email = os.environ.get('RECIPIENT_EMAIL', 'email@btbsales.ru')
    
    # Формируем письмо
    email_body = f"""Новая заявка с сайта "ИИ в закупках"

Имя: {name}
Телефон: {phone}
Email: {email}

---
Дата и время: {context.request_id}"""
    
    msg = MIMEMultipart()
    msg['From'] = smtp_user if smtp_user else 'noreply@btbsales.ru'
    msg['To'] = recipient_email
    msg['Subject'] = f'Новая заявка от {name}'
    msg.attach(MIMEText(email_body, 'plain', 'utf-8'))
    
    # Логируем заявку
    print(f"New lead: {name} | {phone} | {email} -> {recipient_email}")
    
    # Пытаемся отправить email если настроен SMTP
    if smtp_user and smtp_password:
        try:
            server = smtplib.SMTP(smtp_host, smtp_port)
            server.starttls()
            server.login(smtp_user, smtp_password)
            server.send_message(msg)
            server.quit()
            print(f"Email sent successfully to {recipient_email}")
        except Exception as e:
            print(f"SMTP send error: {e}")
            # Не возвращаем ошибку пользователю, просто логируем
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'isBase64Encoded': False,
        'body': json.dumps({
            'success': True, 
            'message': 'Заявка получена. Мы свяжемся с вами в ближайшее время.',
            'recipient': recipient_email
        })
    }