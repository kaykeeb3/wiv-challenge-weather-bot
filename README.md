# 🎡 LUMINA FEST - API Meteorológica (Aurora)

API simplificada para o desafio técnico de chatbot. Fornece informações climáticas dinâmicas para a cidade de Aurora.

## 🚀 Como Rodar

1.  **Instale as dependências:** `pnpm install`
2.  **Configure o `.env`:** Adicione sua `WEATHER_API_KEY`.
3.  **Inicie:** `pnpm dev`

## 📡 Endpoints

### `GET /weather`
Retorna a previsão dinâmica no formato exato solicitado:

```json
{
  "cidade": "Aurora",
  "data": "29 de abril",
  "temperatura": "22°C",
  "descricao": "Céu limpo",
  "clima": "Clear"
}
```

## 🛠️ Detalhes Técnicos
- **Data Dinâmica**: Gerada no servidor no formato `pt-BR`.
- **Cidade Fixa**: Retorna sempre "Aurora" conforme o escopo.
- **Leveza**: JSON minimalista para consumo rápido pelo Blip Builder.

---
Desenvolvido para o desafio técnico da Wiv.
