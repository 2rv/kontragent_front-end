import Header from '@editorjs/header';
import List from '@editorjs/list';
import Paragraph from '@editorjs/paragraph';
import Embed from '@editorjs/embed';
import Table from '@editorjs/table';
import Marker from '@editorjs/marker';
import Delimiter from '@editorjs/delimiter';
import ImageTool from '@editorjs/image';
// import { httpRequest } from 'src/main/http';

export const tools = {
  header: {
    class: Header,
    config: {
      placeholder: 'Это заголовок',
      levels: [1, 2, 3, 4, 5, 6],
      defaultLevel: 1,
    },
    inlineToolbar: ['link', 'bold', 'italic'],
  },
  list: {
    class: List,
    inlineToolbar: true,
  },
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  embed: {
    class: Embed,
    config: {
      services: {
        codepen: true,
        youtube: true,
        coub: true,
        imgur: true,
        gfycat: true,
        vimeo: true,
        vine: true,
        twitter: true,
        instagram: true,
        aparat: true,
        facebook: true,
        pinterest: true,
      },
    },
  },
  table: Table,
  marker: Marker,
  delimiter: Delimiter,
  // image: {
  //   class: ImageTool,
  //   config: {
  //     uploader: {
  //       uploadByFile(file) {
  //         const formData = new FormData();
  //         formData.append('file', file);
  //         return httpRequest({
  //           method: 'POST',
  //           url: 'file/create',
  //           data: formData,
  //           headers: { 'Content-Type': 'multipart/form-data' },
  //         }).then((res) => {
  //           return {
  //             success: 1,
  //             file: {
  //               url: res.data.fileUrl,
  //             },
  //           };
  //         });
  //       },
  //     },
  //     captionPlaceholder: 'Описание',
  //   },
  // },
};

export const i18n = {
  messages: {
    ui: {
      blockTunes: {
        toggler: {
          'Click to tune': 'Нажмите, чтобы настроить',
          'or drag to move': 'или перетащите',
        },
      },
      inlineToolbar: {
        converter: {
          'Convert to': 'Конвертировать в',
        },
      },
      toolbar: {
        toolbox: {
          Add: 'Добавить',
        },
      },
    },
    toolNames: {
      Text: 'Параграф',
      Heading: 'Заголовок',
      List: 'Список',
      Warning: 'Примечание',
      Checklist: 'Чеклист',
      Quote: 'Цитата',
      Code: 'Код',
      Delimiter: 'Разделитель',
      'Raw HTML': 'HTML-фрагмент',
      Image: 'Вставить картинку',
      Table: 'Таблица',
      Link: 'Ссылка',
      Marker: 'Маркер',
      Bold: 'Полужирный',
      Italic: 'Курсив',
      InlineCode: 'Моноширинный',
      Personality: 'Вставить автора',
    },
    tools: {
      link: {
        'Add a link': 'Вставить ссылку',
      },
      stub: {
        'The block can not be displayed correctly.':
          'Блок не может быть корректно отображен',
      },
      image: {
        'Select an Image': 'Выбрать изображение',
        'Couldn’t upload image. Please try another.':
          'Не удалось загрузить изображение. Пожалуйста, попробуйте снова',
        'With border': 'Граница',
        'Stretch image': 'Растянуть',
        'With background': 'С фоном',
      },
      table: {
        'Add column to left': 'Добавить колонку слева',
        'Add column to right': 'Добавить колонку слева',
        'Delete column': 'Удалить колонку',
        'Add row above': 'Добавить ряд выше',
        'Add row below': 'Добавить ряд ниже',
        'Delete row': 'Удалить ряд',
        'With headings': 'С заголовками',
        'Without headings': 'Без заголовков',
        Heading: 'Заголовок',
      },
      linkTool: {
        Link: 'Ссылка',
        "Couldn't fetch the link data": 'Не удалось запросить данные по ссылке',
        "Couldn't get this link data, try the other one":
          'Не удалось получить данные по ссылке. Попробуйте другую',
        'Wrong response format from the server':
          'Неправильный формат ответа сервера',
      },
    },
    blockTunes: {
      delete: {
        Delete: 'Удалить',
      },
      moveUp: {
        'Move up': 'Переместить вверх',
      },
      moveDown: {
        'Move down': 'Переместить вниз',
      },
    },
  },
};
