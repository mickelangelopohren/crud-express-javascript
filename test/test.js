const { expect, request } = require('./helpers');


const validateEvent = (event) => {
  expect(typeof event).to.be.eql('object');
  expect(typeof event.id).to.be.eql('number');
  expect(typeof event.name).to.be.eql('string');
  expect(typeof event.presentation_date).to.be.eql('string');
};

describe('Http routes', () => {
  let createdEventId = null;

  describe('POST /events', () => {
    it('should return a new created event', async () => {
      const response = await request.post('/events').send({
        name: 'Evento de Teste',
        presentation_date: '2020-05-04 14:00:00',
      });

      expect(response.status).to.be.eql(200);
      validateEvent(response.body);
      createdEventId = response.body.id;
    });
  });

  describe('GET /events', () => {
    it('should get all events', async () => {
      const response = await request.get('/events');
      expect(response.status).to.be.eql(200);
    });
  });

  describe('GET /event/{id}', () => {
    it('should get created event by id', async () => {
      const response = await request.get(`/events/${createdEventId}`);
      expect(response.status).to.be.eql(200);
      validateEvent(response.body);
    });
  });

  describe('PATCH /events/{id}', () => {
    it('should update event with changes', async () => {
      const changedName = 'Evento de Teste Alterado';
      const response = await request.patch(`/events/${createdEventId}`).send({
        name: changedName,
      });

      expect(response.body.name).to.be.eql(changedName);
      expect(response.status).to.be.eql(200);

      validateEvent(response.body);
    });
  });

  describe('DELETE /event/{id}', () => {
    it('should delete created event by id', async () => {
      const response = await request.get(`/events/${createdEventId}`);
      expect(response.status).to.be.eql(204);
      // validateEvent(response.body);
    });
  });
});
