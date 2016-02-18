// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  },

  dequeue: function(){
	this.trigger('dequeue', this);
  },

  ended: function(){
	this.trigger('ended', this);
  }

});
/*
  xdescribe('enqueue', function() {
    it('triggers an "enqueue" event', function() {
      model.enqueue();
      expect(model.trigger).to.have.been.calledWith('enqueue', model);
    });
  });

  xdescribe('dequeue', function() {
    it('triggers a "dequeue" event', function() {
      model.dequeue();
      expect(model.trigger).to.have.been.calledWith('dequeue', model);
    });
  });

  xdescribe('ended', function() {
    it('triggers an "ended" event', function() {
      model.play();
      model.ended();
      expect(model.trigger).to.have.been.calledWith('ended', model);
    });
  });
  */