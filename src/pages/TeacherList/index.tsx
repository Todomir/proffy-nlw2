import React from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';

function TeacherList() {
  return (
    <div id='page-teacher-list' className='container'>
      <PageHeader title='Estes são os proffys disponíveis:'>
        <form id='search-teachers'>
          <Input type='text' name='subject' label='Matéria' />
          <Input type='text' name='week-day' label='Dia da semana' />
          <Input type='time' name='time' label='Horário' />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
      </main>
    </div>
  );
}

export default TeacherList;
