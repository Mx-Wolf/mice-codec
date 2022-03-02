# API

Предоставляет три функции

- generateRandomString():Promise<string>
- encode(value: string, buffer: Blob): Promise<Blob>
- decode(value: string, buffer: Blog): Promise<Blob>

## generateRandomString

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

* value - строка полученная из generateRandomString (та же самая, которая использовалась при закодировании)
* blob - Blob, который нужно раскодировать.

### Результат

Promise который разрешится в раскодированный блоб
