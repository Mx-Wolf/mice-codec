# API

Предоставляет три функции

- getRandomString():Promise&lt;string>
- encode(value: string, buffer: Blob): Promise&lt;Blob>
- decode(value: string, buffer: Blog): Promise&lt;Blob>

## getRandomString

создает строку внутри которой json. Это сериализованный ключ для шифрования AES-CBC и iv. Предполагается, что эту строку используют только один раз.

### Параметры

Нет.

### Результат

Promise который разрешится строкой с сериализованным значением.

## encode

Закодирует блоб.

### Параметры

* value - строка полученная из generateRandomString
* blob - Blob, который нужно закодировать.

### Результат

Promise который разрешится в закодированный блоб

## decode

раскодирует блоб

### Параметры

* value - строка полученная из generateRandomString (та же самая, которая использовалась при кодировании)
* blob - Blob, который нужно раскодировать.

### Результат

Promise который разрешится в раскодированный блоб
