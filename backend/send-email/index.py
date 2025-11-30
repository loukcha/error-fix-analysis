import json
import os
from typing import Dict, Any
import urllib.request
import urllib.parse


def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Send contact form data to email via Telegram
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
    
    # Сохраняем заявку в простую базу данных или отправляем в Telegram
    message = f"""🔔 Новая заявка с сайта "ИИ в закупках"

👤 Имя: {name}
📞 Телефон: {phone}
📧 Email: {email}

Отправьте информацию на: email@btbsales.ru"""
    
    telegram_bot_token = os.environ.get('TELEGRAM_BOT_TOKEN', '')
    telegram_chat_id = os.environ.get('TELEGRAM_CHAT_ID', '')
    
    # Если есть Telegram - отправляем туда, если нет - просто логируем
    if telegram_bot_token and telegram_chat_id:
        try:
            url = f'https://api.telegram.org/bot{telegram_bot_token}/sendMessage'
            data = urllib.parse.urlencode({
                'chat_id': telegram_chat_id,
                'text': message,
                'parse_mode': 'HTML'
            }).encode()
            
            req = urllib.request.Request(url, data=data)
            urllib.request.urlopen(req)
        except Exception as e:
            print(f"Telegram send error: {e}")
    
    # Логируем в консоль (будет видно в логах облачной функции)
    print(f"New lead: {name} | {phone} | {email}")
    
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
            'recipient': 'email@btbsales.ru'
        })
    }