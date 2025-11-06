// @ts-check
import eslintPluginVue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import js from '@eslint/js'

export default [
  js.configs.recommended,
  ...eslintPluginVue.configs['flat/recommended'],
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,ts,tsx,vue}'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        process: 'readonly',
        defineNuxtConfig: 'readonly',
        definePageMeta: 'readonly',
        defineNuxtComponent: 'readonly',
        defineNuxtRouteMiddleware: 'readonly',
        navigateTo: 'readonly',
        useRoute: 'readonly',
        useRouter: 'readonly',
        useFetch: 'readonly',
        useAsyncData: 'readonly',
        useHead: 'readonly',
        useSeoMeta: 'readonly',
        useRuntimeConfig: 'readonly',
        useState: 'readonly',
        useCookie: 'readonly',
        useRequestHeaders: 'readonly',
        useRequestEvent: 'readonly',
        useNuxtApp: 'readonly',
        defineNuxtPlugin: 'readonly',
        createError: 'readonly',
        showError: 'readonly',
        clearError: 'readonly',
      },
    },
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/node_modules/**', '**/.nuxt/**', '**/.output/**', '**/coverage/**'],
  },

  {
    name: 'app/formatting-rules',
    rules: {
      // Убирает лишние пробелы в конце строк
      'no-trailing-spaces': 'error',

      // Проверяет пробелы вокруг операторов
      'space-infix-ops': 'error',

      // Проверяет пробелы перед скобками функций
      'space-before-function-paren': ['error', {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      }],

      // Проверяет пробелы внутри скобок
      'space-in-parens': ['error', 'never'],

      // Проверяет пробелы внутри фигурных скобок
      'object-curly-spacing': ['error', 'always'],

      // Запрещает множественные пробелы
      'no-multi-spaces': 'error',

      // Проверяет пробелы внутри квадратных скобок
      'array-bracket-spacing': ['error', 'never'],

      // Проверяет пробелы после запятых
      'comma-spacing': ['error', { before: false, after: true }],

      // Требует висячие запятые в многострочных структурах
      'comma-dangle': ['error', 'always-multiline'],

      // Проверяет пробелы после ключевых слов
      'keyword-spacing': ['error', { before: true, after: true }],

      // Проверяет множественные пустые строки
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],

      // Проверяет точки с запятой
      'semi': ['error', 'never'],

      // Проверяет кавычки
      'quotes': ['error', 'single', { avoidEscape: true }],

      // Проверяет отступы
      'indent': ['error', 2, { SwitchCase: 1 }],

      // Разрешает несколько корневых элементов в template (Vue 3)
      'vue/no-multiple-template-root': 'off',

      // Разрешает пустые CSS-правила в блоках <style>
      'vue/no-empty-component-block': 'off',

      // Запрещает относительные импорты из родительских директорий
      'no-restricted-imports': ['error', {
        patterns: [{
          group: ['../*', '../../*', '../../../*'],
          message: 'Используйте алиас @/ вместо относительных путей',
        }],
      }],

      'vue/multi-word-component-names': 'off',
      'vue/no-textarea-mustache': 'off',
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

      // Запрещает множественные пробелы в Vue template
      'vue/no-multi-spaces': 'error',

      // Отключаем проверку самозакрывающихся тегов
      'vue/html-self-closing': 'off',

      // Запрещает пробелы перед закрывающей скобкой тега
      'vue/html-closing-bracket-spacing': ['error', {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always',
      }],

      // Проверяет отступы в Vue template
      'vue/html-indent': ['error', 'tab', {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      }],

      // Требует пустые строки между блоками script/template/style
      'vue/padding-line-between-blocks': ['error', 'always'],

      // Требует пробелы внутри mustache интерполяций {{ }}
      'vue/mustache-interpolation-spacing': ['error', 'always'],

      // Устанавливает максимальную длину строки
      'vue/max-len': ['error', {
        code: 140,
        template: 140,
        tabWidth: 4,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignoreHTMLAttributeValues: true,
        ignoreHTMLTextContents: true,
      }],

      // Разрешает несколько атрибутов на одной строке
      'vue/max-attributes-per-line': ['error', {
        singleline: {
          max: 3,
        },
        multiline: {
          max: 1,
        },
      }],
    },
  },
]
