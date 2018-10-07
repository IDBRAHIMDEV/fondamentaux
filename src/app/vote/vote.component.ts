import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  @Input('jaime') like = 0;
  @Input('jaimepas') dislike = 0;

  @Output('envoyerVote') envoyerVote = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  voteLike() {
    this.like++;
    this.envoyerVote.emit({status: 0, value: this.like});
  }

  voteDisLike() {
    this.dislike++;
    this.envoyerVote.emit({status: 1, value: this.dislike});
  }

}
