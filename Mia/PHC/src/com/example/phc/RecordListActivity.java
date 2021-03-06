package com.example.phc;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

import phc.interfaces.IDocStorage;
import phc.objects.DocResult;
import phc.storage.DocStorage;
import android.app.ListActivity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ListView;

public class RecordListActivity extends ListActivity {

	public static final String DOCID_EXTRA = "doc_id";
	/** Called when the activity is first created. */
	RecordAdapter adapter = null;
	IDocStorage _docStorage;
	
	@Override
	public void onCreate(Bundle savedInstanceState) {
	    super.onCreate(savedInstanceState);
	    
	    _docStorage = DocStorage.get();	    
	    String tag = null;	    
	    if (getIntent().hasExtra("tag")) {
	    	tag = getIntent().getStringExtra("tag");
	      }
	    
	    fillContent(tag);
        
	}

	private void fillContent(String parentTag) {
		
	  List<DocResult> docs = new ArrayList<DocResult>();
	  
      List<String> tags = null;
      
      Collection<String> children = _docStorage.getChildTags(parentTag);
      if(children != null)
      {
    	  tags = new ArrayList<String>(children);
    	  Collections.sort(tags);
          for(String tag : tags)
          {
        	  DocResult result = new DocResult(null, tag, "-1");
        	  docs.add(result);
          }
      }
      //go over all the tags in tag tree and get the docs 
     
      
//      for(String tag: tags)
//      {
//    	  docs.addAll(_docStorage.queryDocsByTags(Arrays.asList(tag)));
//      }

      if(parentTag != null) {
    	  ArrayList<DocResult> docsByTag = new ArrayList<DocResult>(
    			  DocStorage.get().queryDocsByTags(Arrays.asList(parentTag)));
    	  Collections.reverse(docsByTag);
    	  docs.addAll(docsByTag);
      }
      
      adapter =  new RecordAdapter(this, R.layout.record_row, docs, tags == null ? 0 : tags.size());
      this.setListAdapter(adapter);
	}
	
    @Override
    protected void onListItemClick(ListView l, View v, int position, long id) {
            // TODO Auto-generated method stub
            super.onListItemClick(l, v, position, id);
            
            DocResult o = adapter.getItem(position);
            if(o.date() == "-1"){ //this is a tag
                  // fillContent(o.id());
            	 Intent intent = new Intent(this, RecordListActivity.class);
            	 intent.putExtra("tag", o.id());
                 startActivity(intent);
            }
            else
            {
                 onDocClick(o);
            }
    }

	private void onDocClick(DocResult o) {
		//open a new activity to watch the document
		Intent intent = new Intent(this, ScannedDocPresentationActivity.class);
		intent.putExtra(DOCID_EXTRA, o.id());
		startActivity(intent);
	}



}
