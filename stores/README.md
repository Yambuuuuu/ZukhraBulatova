# Stores Documentation

## Advantages Store

Store для управления данными преимуществ на главной странице.

### Использование

```javascript
import { useAdvantagesStore } from '~/stores/advantages'

const advantagesStore = useAdvantagesStore()
const advantages = computed(() => advantagesStore.getAllAdvantages)
```

### State

- `advantages` - массив объектов преимуществ

### Getters

- `getAllAdvantages` - получить все преимущества
- `getAdvantageById(id)` - получить преимущество по ID

### Actions

- `addAdvantage(advantage)` - добавить новое преимущество
- `updateAdvantage(id, updatedData)` - обновить преимущество
- `removeAdvantage(id)` - удалить преимущество

### Структура данных

```javascript
{
  id: Number,
  icon: String,
  title: String,
  description: String
}
```

### Пример добавления нового преимущества

```javascript
advantagesStore.addAdvantage({
  icon: 'advantage-4',
  title: 'Новое преимущество',
  description: 'Описание преимущества'
})
```
